import React from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { changeStore, fetchSwitchStores } from 'ApiFarm/store';
import { SettingLayerWrap } from 'ComponentsFarm/styles/common';
import { runInAction } from 'mobx';
import { authStore } from 'MobxFarm/store';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

interface LogoutPopupProps {
  onClose: () => void;
}

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LogoutPopup: React.FC<LogoutPopupProps> = ({ onClose }) => {
  const history = useHistory();
  const { user_name, user_email } = authStore?.user_info ?? {};

  const setAuthStoreInfo = ({
    selected_store_idx,
    selected_store_name,
  }: {
    selected_store_idx: number;
    selected_store_name: string;
  }) =>
    runInAction(() => {
      authStore.selected_store_idx = selected_store_idx;
      authStore.selected_store_name = selected_store_name;
    });

  // useQuery
  const storeListQuery = useQuery(['switch-stores'], fetchSwitchStores, {
    enabled: authStore.isLoggedIn,
  });

  const changeStoreMutate = useMutation(changeStore, {
    onSuccess: res => {
      setAuthStoreInfo(res);
      history.go(0);
    },
  });

  return (
    <PopupOverlay onClick={onClose}>
      <SettingLayerWrap className="layer_setting">
        <div className="box_profile">
          <h1 className="logo">
            <img src="/images/logo_profile.svg" alt="GOPIZZA" />
          </h1>
          <div className="info">
            <p className="name">{user_name}</p>
            <p className="email">{user_email}</p>
            <p className="store_name">{authStore?.selected_store_name}</p>
          </div>
        </div>
        <button
          type="button"
          className="btn_logout"
          onClick={() => authStore.logOut()}
        >
          로그아웃
        </button>
        <h2>매장 선택</h2>
        <ul className="list_store">
          {storeListQuery.isLoading ? (
            <li>Loading...</li>
          ) : (
            <>
              {(storeListQuery.data?.store_list ?? []).map(row => {
                const selected = authStore.selected_store_idx === row.store_idx;
                return (
                  <li key={row.mus_idx} className={selected ? 'selected' : ''}>
                    <button
                      type="button"
                      onClick={() =>
                        !changeStoreMutate.isLoading &&
                        changeStoreMutate.mutate(row.mus_idx)
                      }
                    >
                      <span className="store-name">{row.store_name}</span>
                      {selected && <span className="ico_check" />}
                    </button>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </SettingLayerWrap>
    </PopupOverlay>
  );
};

export default LogoutPopup;

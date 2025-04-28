/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { KdsContentPost, KdsWrapPost } from 'ComponentsFarm/styles/common';
import React, { useCallback, useEffect, useState } from 'react';
import 'swiper/css';
import { useQuery } from '@tanstack/react-query';
import { fetchMyStore } from 'ApiFarm/auth';
import { IReceiptListRes } from 'ApiFarm/interface/receipt';
import { fetchReceiptList } from 'ApiFarm/receipt';
import { AxiosError } from 'axios';
import ReceiptPost from 'ComponentsFarm/receipt/ReceiptPost';
import { Toolbar } from 'ComponentsFarm/toolbar/Toolbar';
import { observer } from 'mobx-react';
import { authStore } from 'MobxFarm/store';
import { useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PageButtonArea = styled.div`
  color: #fff;
  button {
    width: 200px;
    height: 200px;
  }
`;

const Home = () => {
  const history = useHistory();
  const [grid, setGrid] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<number[]>([]);
  const [sorting, setSorting] = useState('processing');

  const soundEffectPlay = useCallback((src: string) => {
    const audio = new Audio(src);
    audio.play();
  }, []);

  useQuery(['selected-store'], fetchMyStore, {
    enabled: authStore.isLoggedIn,
    onSuccess: res => {
      authStore.selected_store_idx = res.selected_store_idx;
      authStore.selected_store_name = res.selected_store_name;
    },
  });

  // 영수증 리스트
  const { data, refetch } = useQuery<IReceiptListRes, AxiosError>(
    ['receiptListData'],
    () =>
      fetchReceiptList({
        page: 1,
        size: 99,
        filter_sale_type: filter.toString(),
        sort_method: sorting,
      }),
    {
      refetchInterval: 1000 * 5,
      refetchIntervalInBackground: true,
    }
  );

  const startIndex = (currentPage - 1) * grid;
  const endIndex = startIndex + grid;
  const paginatedData = data?.list.slice(startIndex, endIndex);

  // 셋팅 값 가져오기
  useEffect(() => {
    if (!authStore.isLoggedIn) {
      history.push('/');
    }
  }, [history]);

  return (
    <KdsWrapPost>
      {paginatedData && paginatedData?.length > 0 ? (
        <KdsContentPost>
          <ul className="grid-container">
            {paginatedData.map(receipt => (
              <ReceiptPost key={receipt.receipt_idx} receipt={receipt} />
            ))}
          </ul>

          <Toolbar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPageNum={Math.ceil(Number(data?.list.length) / grid)}
          />
        </KdsContentPost>
      ) : (
        <div className="noOrder">
          <div
            css={css`
              width: 100%;
              margin-top: auto;
            `}
          >
            <Toolbar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPageNum={Math.ceil(Number(data?.list.length) / grid)}
            />
          </div>
          {/* <div className="logo">
            <img src="/images/intro-logo.svg" alt="GOPIZZA" />
          </div> */}
        </div>
      )}
    </KdsWrapPost>
  );
};

export default observer(Home);

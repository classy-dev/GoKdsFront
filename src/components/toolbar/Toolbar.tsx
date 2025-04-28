/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import LogoutConfirmPopup from 'ComponentsFarm/element/icons/LogoutPopup';
import ModalPortal from 'ComponentsFarm/element/Portal';
import { BsPower } from 'react-icons/bs';
import styled from '@emotion/styled';
import { EmbossedButton } from './EmbossedButton';
import { Navigation } from './NaviGation';
import { SalesDisplay } from './SalesDisplay';

const ToolBarWrap = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  margin-top: 10px;
  background-color: #e9ebea;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  padding: 10px 30px;

  @media (max-width: 500px) {
    padding: 5px;
    height: 40px;
  }
`;

export const Toolbar = ({ currentPage, setCurrentPage, totalPageNum }: any) => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handlePrevious = () => {
    setCurrentPage((prev: any) => prev - 1);
  };
  const handleNext = () => {
    setCurrentPage((prev: any) => prev + 1);
  };

  return (
    <ToolBarWrap>
      <Navigation
        currentPage={currentPage}
        totalPage={totalPageNum === 0 ? '1' : totalPageNum}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      <SalesDisplay />
      {/* <div style={{ marginLeft: 'auto' }}>
        <EmbossedButton
          icon={<BsGrid3X3Gap size={24} />}
          label="그리드 보기"
          onClick={() => console.log('ddd')}
        />
      </div> */}
      <div style={{ marginLeft: 'auto' }}>
        <EmbossedButton
          icon={<BsPower size={24} />}
          label="로그아웃"
          onClick={() => setShowLogoutPopup(true)}
          color="#ff0000"
        />
      </div>
      {showLogoutPopup && (
        <ModalPortal>
          <LogoutConfirmPopup onClose={() => setShowLogoutPopup(false)} />
        </ModalPortal>
      )}
    </ToolBarWrap>
  );
};

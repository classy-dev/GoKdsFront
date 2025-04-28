import React from 'react';
import styled from '@emotion/styled';
import { EmbossedButton } from './EmbossedButton';
import { PageDisplay } from './PageDisplay';

const NaviGationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Navigation = ({
  onPrevious,
  onNext,
  currentPage,
  totalPage,
}: any) => (
  <>
    <NaviGationContainer>
      <EmbossedButton
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        }
        label="이전"
        onClick={onPrevious}
        disabled={currentPage === 1}
      />
      <PageDisplay currentPage={currentPage} totalPage={totalPage} />
      <EmbossedButton
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        }
        label="다음"
        onClick={onNext}
        disabled={currentPage === totalPage}
      />
    </NaviGationContainer>
  </>
);

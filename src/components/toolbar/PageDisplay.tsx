import { css } from '@emotion/react';

const pageDisplayStyles = css`
  min-width: 75px;
  font-family: 'Digital-7', monospace;
  font-size: 24px;
  color: #00ffff;
  background-color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  letter-spacing: 2px;
  text-shadow: 0 0 5px #00ffff;
  text-align: center;
`;

export const PageDisplay = ({ currentPage, totalPage }: any) => (
  // eslint-disable-next-line react/no-unknown-property
  <div css={pageDisplayStyles}>
    {currentPage === '-'
      ? '--'
      : `${String(currentPage).padStart(2, '')}/${String(totalPage).padStart(2, '')}`}
  </div>
);

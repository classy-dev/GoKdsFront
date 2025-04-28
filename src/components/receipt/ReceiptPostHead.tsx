/* eslint-disable no-unused-vars */
import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import useTimer from 'HookFarm/useTimerPost';
import styled from '@emotion/styled';

dayjs.extend(duration);

const SaleType: { [key: string]: string } = {
  type0: '내점',
  type1: '포장',
  type2: '배달',
};

const ReceiptPostHeadWrap = styled.div`
  border-bottom: 1px solid #dedede;
  .inner {
    display: flex;
    aling-items: center;
    padding-bottom: 10px;

    h2 {
      font-size: 18px;
      margin-bottom: 2px;
      color: #333;
    }

    .txt_time {
      margin-left: auto;
      font-size: 14px;
      line-height: 1.4;
      color: #666;
    }
  }

  @media (max-width: 500px) {
    .inner {
      display: block;
    }
    h2,
    .txt_time {
      font-size: 11px !important;
    }
  }
`;

const ReceiptPostHead = ({ receiptNumber, saleType, orderedAt }: any) => {
  const { showTime } = useTimer(orderedAt);

  return (
    <>
      <ReceiptPostHeadWrap>
        <div className="inner">
          <h2>
            No. {receiptNumber} ({SaleType[`type${saleType}`]})
          </h2>
          <p className="txt_time">고객 주문 후 {showTime}</p>
        </div>
      </ReceiptPostHeadWrap>
    </>
  );
};

export default React.memo(ReceiptPostHead);

import React from 'react';
import { IMainMenutem } from 'ApiFarm/interface/receipt';
import styled from '@emotion/styled';
import { Cooking } from '../element/icons/Cooking';

const ProcessStatus: { [key: string]: { className: string; txt: string } } = {
  type0: { className: 'state_waiting', txt: '대기' },
  type1: { className: 'state_cooking', txt: '처리 중' },
  type2: { className: 'state_fin', txt: '완료' },
  type3: { className: 'state_check', txt: '확인필요' },
};

const ReceiptPostBody = ({
  receiptList,
  status,
}: {
  receiptList: IMainMenutem[];
  status: string;
}) => {
  const notKdsMenu = (depth1ClassName: string) => {
    if (status === 'fin') {
      if (depth1ClassName === '세트' || depth1ClassName === 'null') {
        return '2';
      }
      if (depth1ClassName === '음료' || depth1ClassName === '옵션') {
        return '3';
      }
    }
    return null;
  };

  return (
    <ReceiptPostBodyWrap>
      {receiptList.map(depth1 => (
        <li>
          <ReceiptPostDepth1Wrap>
            <span
              className={`txt_product_name ${notKdsMenu(String(depth1.class_name)) === '2' || depth1.process_status === 2 ? 'fin-state' : ''}`}
            >
              {depth1.product_name} x {depth1.quantity}
            </span>
            {(depth1.process_status === 1 ||
              depth1.process_status === 2 ||
              !!notKdsMenu(String(depth1.class_name))) && (
              <span
                className={`txt_state ${ProcessStatus[`type${notKdsMenu(String(depth1.class_name)) ?? depth1.process_status}`].className}`}
              >
                ···&nbsp;
                {
                  ProcessStatus[
                    `type${notKdsMenu(String(depth1.class_name)) ?? depth1.process_status}`
                  ].txt
                }
              </span>
            )}
          </ReceiptPostDepth1Wrap>
          <ul className="list_depth2">
            {depth1.option_list
              .filter(el => !el.product_name.includes('없음'))
              .map(depth2 => (
                <ReceiptPostDepth2Wrap>
                  <span className="wrap_product">
                    <span
                      className={`box_product_name ${depth2.process_status === 2 ? 'fin-state' : ''} `}
                    >
                      <span className="ico_state">
                        {depth2.process_status === 1 ? <Cooking /> : '-'}
                      </span>
                      <span className="txt_prodcut_name">
                        {depth2.product_name}
                      </span>
                    </span>
                    <span
                      className={`txt_state ${ProcessStatus[`type${notKdsMenu(String(depth2.class_name)) ?? depth2.process_status}`].className}`}
                    >
                      ···&nbsp;
                      {
                        ProcessStatus[
                          `type${notKdsMenu(String(depth2.class_name)) ?? depth2.process_status}`
                        ].txt
                      }
                    </span>
                  </span>
                </ReceiptPostDepth2Wrap>
              ))}
          </ul>
        </li>
      ))}
    </ReceiptPostBodyWrap>
  );
};

export default React.memo(ReceiptPostBody);

const ReceiptPostBodyWrap = styled.ul`
  margin: 10px 10px 0;

  .fin-state {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 5px;
      width: 100%;
      height: 2px;
      background: coral;
    }
  }

  .chk-state {
    color: blue;
    font-weight: bold;
  }

  > li {
    padding: 10px 0;
    border-bottom: 1px dashed #ddd;

    &:last-of-type {
      border: none;
    }
  }

  .txt_state {
    margin-left: auto;
  }

  .state_cooking {
    color: orange;
  }
  .state_waiting {
    color: #ddd;
  }
  .state_check {
    color: blue;
  }
  .state_fin {
    color: red;
  }

  @media (max-width: 500px) {
    margin: 5px 5px 0;
    li {
      padding-top: 5px;
      .txt_product_name {
        font-size: 11px;
      }
      .txt_state {
        font-size: 7px;
      }
    }
  }
`;

const ReceiptPostDepth1Wrap = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
`;

const ReceiptPostDepth2Wrap = styled.div`
  margin-top: 5px;
  font-size: 16px;

  .wrap_product {
    display: flex;
    align-items: center;
    margin-left: 5px;
    svg {
      width: 30px;
      height: 30px;
    }

    .box_product_name {
      display: flex;
      align-items: center;
    }

    .ico_state {
      overflow: hidden;
      width: 30px;
      height: 25px;
      text-align: center;
    }
  }

  .plate {
    fill: #000;
    animation: colorChange 3s ease-in-out infinite;
  }

  @keyframes colorChange {
    0%,
    100% {
      fill: #000;
    }
    50% {
      fill: orange;
    }
  }

  @media (max-width: 500px) {
    font-size: 10px;

    .ico_state {
      width: 10px !important;
      height: auto !important;
    }
  }
`;

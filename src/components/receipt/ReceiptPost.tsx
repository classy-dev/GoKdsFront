import React, { useCallback, useMemo, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  IMainMenutem,
  IReceiptListItem,
  ISubMenuItem,
} from 'ApiFarm/interface/receipt';
import { fetchCompleteReceipt } from 'ApiFarm/receipt';
import styled from '@emotion/styled';
import ReceiptPostBody from './ReceiptPostBody';
import ReceiptPostHead from './ReceiptPostHead';
import RippleButton from './RippleAnimationButton';

const ReceiptPost = ({ receipt }: { receipt: IReceiptListItem }) => {
  const queryClient = useQueryClient();
  const [isRemoving, setIsRemoving] = useState(false);

  const status = useMemo(() => {
    const allItems = receipt?.item_list.flatMap((item: IMainMenutem) => [
      item,
      ...(item.option_list || []),
    ]);

    const relevantItems = allItems.filter(
      (item: IMainMenutem | ISubMenuItem) =>
        item.class_name !== null &&
        !['음료', '옵션', '세트'].includes(String(item?.class_name))
    );

    if (relevantItems.length === 0) {
      return 'fin';
    }

    return relevantItems.every(
      (item: IMainMenutem | ISubMenuItem) => item.process_status === 2
    )
      ? 'fin'
      : 'wait';
  }, [receipt]);

  const { mutate: completeReceipt } = useMutation(
    () => fetchCompleteReceipt(receipt.receipt_idx),
    {
      onMutate: async () => {
        setIsRemoving(true);
        await queryClient.cancelQueries(['receiptListData']);
        const previousReceipts = queryClient.getQueryData(['receiptListData']);

        queryClient.setQueryData(['receiptListData'], (old: any) => ({
          ...old,
          list: old.list.filter(
            (r: IReceiptListItem) => r.receipt_idx !== receipt.receipt_idx
          ),
        }));

        return { previousReceipts };
      },
      onError: (err, variables, context) => {
        if (context?.previousReceipts) {
          queryClient.setQueryData(
            ['receiptListData'],
            context.previousReceipts
          );
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries(['receiptListData']);
      },
    }
  );

  const handleComplete = useCallback(() => {
    setIsRemoving(true);

    // 애니메이션 후 실제 API 호출
    setTimeout(() => {
      completeReceipt();
    }, 250); // 0.25초 애니메이션 후 API 호출
  }, [completeReceipt]);

  return (
    <li
      key={receipt.receipt_idx}
      className={isRemoving ? 'removing' : ''}
      style={{
        transition: 'all 0.25s ease-out',
        opacity: isRemoving ? 0 : 1,
        transform: isRemoving ? 'scale(0.8) translateY(-20px)' : 'none',
      }}
    >
      <PostItWrap status={status}>
        <ReceiptPostHead
          receiptNumber={receipt.receipt_number}
          saleType={receipt.sale_type}
          orderedAt={receipt.ordered_at}
        />
        <ReceiptPostBody receiptList={receipt.item_list} status={status} />
        {status === 'fin' && (
          <RippleButton className="stamp-button" onClick={handleComplete}>
            완료
          </RippleButton>
        )}
        {receipt.order_memo && <Memo>{receipt.order_memo}</Memo>}
      </PostItWrap>
    </li>
  );
};

export default ReceiptPost;

const PostItWrap = styled.div<{ status: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: ${({ status }) => (status === 'fin' ? '#feff9c' : '#E9EBEA')};

  .stamp-button {
    margin: auto auto 0;
    width: 80%;
  }

  @media (max-width: 500px) {
    padding: 5px;
  }
`;

const Memo = styled.div`
  margin-top: auto;
  font-size: 13px;
  white-space: pre-line;
  border-top: 1px dashed #666;
  padding-top: 5px;
  color: #666;

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

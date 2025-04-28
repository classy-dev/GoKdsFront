import { IReceiptListReq } from 'ApiFarm/interface/receipt';
import AxiosUtil from '.';

export const fetchReceiptList = async (params?: IReceiptListReq) => {
  const response = await AxiosUtil.get(`/kds/v1/receipt_list/processing`, {
    params,
  });

  return response.data.data;
};

export const fetchCompleteReceipt = async (receipt_idx: number) => {
  const response = await AxiosUtil.put('/kds/v1/receipt/force_complete', {
    receipt_idx,
  });
  return response.data.data;
};

import { IHistoryListReq } from 'ApiFarm/interface/history';
import AxiosUtil from '.';

export const fetchHistoryList = async (params?: IHistoryListReq) => {
  const response = await AxiosUtil.get(`/kds/v1/receipt_list/history`, {
    params,
  });

  return response.data.data;
};

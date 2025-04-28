export interface IReceiptListReq {
  page?: number;
  size?: number;
  filter_sale_type?: string | null;
  sort_method?: string;
}

export interface IReceiptListRes {
  count: number;
  list: IReceiptListItem[];
}

export interface IReceiptListItem {
  receipt_idx: number;
  order_number: string;
  receipt_number: string;
  ordered_at: string;
  sale_type: number;
  order_memo: string;
  process_status: number;
  process_start_at: string;
  process_complete_at: string | null;
  item_list: IMainMenutem[];
}

export interface IMainMenutem extends Omit<ISubMenuItem, 'is_option_add'> {
  is_option_add: number;
  option_list: ISubMenuItem[];
  receiptNumber?: string;
}

export interface ISubMenuItem {
  receipt_item_idx: number;
  is_product_class: number;
  class_name: string | null;
  product_name: string;
  quantity: number;
  process_status: number;
  process_start_at: string | null;
  process_complete_at: string | null;
  is_option_add?: undefined;
  receiptNumber?: string;
}

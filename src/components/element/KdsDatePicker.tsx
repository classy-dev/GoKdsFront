import React, { Dispatch, forwardRef, LegacyRef, SetStateAction } from 'react';
import { DatePickerWrap } from 'ComponentsFarm/styles/common';
import ko from 'date-fns/locale/ko';
import DatePicker, { registerLocale } from 'react-datepicker';

registerLocale('ko', ko);

interface IKdsDatePicker {
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
}

const KdsDatePicker = ({ startDate, setStartDate }: IKdsDatePicker) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const CustomInput = forwardRef(
    ({ value, onClick }: any, ref: LegacyRef<HTMLInputElement>) => (
      <input ref={ref} type="text" value={value} readOnly onClick={onClick} />
    )
  );

  return (
    <DatePickerWrap>
      <DatePicker
        selected={startDate}
        dateFormat="yyyy-MM-dd"
        showPopperArrow={false}
        maxDate={new Date()}
        onChange={(date: Date) => setStartDate(date)}
        customInput={<CustomInput />}
        locale="ko"
      />
    </DatePickerWrap>
  );
};

export default KdsDatePicker;

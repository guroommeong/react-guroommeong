import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { ko } from 'date-fns/locale';

import { BM1, HB2, HM2 } from '../../styled/Typography';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const CalendarComponent = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  console.debug('state', state);

  return (
    <div
      style={{
        marginTop: 16,
        padding: 20,
        backgroundColor: '#ECF1FA',
        flexGrow: 1,
      }}>
      <DateRange
        locale={ko}
        editableDateInputs={true}
        onChange={item => {
          console.debug('onChange item', item);

          setState([
            {
              startDate: item.selection.startDate ?? new Date(),
              endDate: item.selection.endDate ?? new Date(),
              key: item.selection.key ?? 'selection',
            },
          ]);
        }}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
};

export default CalendarComponent;

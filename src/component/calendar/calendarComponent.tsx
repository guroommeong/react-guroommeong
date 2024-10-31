import { DateRange } from 'react-date-range';
import { ko } from 'date-fns/locale';
import useCalendarStore from '../../store/calendar';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const CalendarComponent = () => {
  const { startDate, endDate, key, update } = useCalendarStore();
  const state = [
    {
      startDate: startDate,
      endDate: endDate,
      key: key,
    },
  ];

  console.debug('useCalendarStore state', state);

  return (
    <div
      style={{
        marginTop: 16,
        backgroundColor: '#ECF1FA',
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <DateRange
        locale={ko}
        editableDateInputs={true}
        onChange={item => {
          const { startDate, endDate } = item.selection;
          update(startDate ?? new Date(), endDate ?? new Date(), item.selection.key ?? 'selection');
        }}
        minDate={new Date()}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
};

export default CalendarComponent;

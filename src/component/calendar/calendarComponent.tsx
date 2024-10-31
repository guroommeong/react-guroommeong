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
        padding: 20,
        backgroundColor: '#ECF1FA',
        flexGrow: 1,
      }}>
      <DateRange
        locale={ko}
        editableDateInputs={true}
        onChange={item => {
          update(
            item.selection.startDate ?? new Date(),
            item.selection.endDate ?? new Date(),
            item.selection.key ?? 'selection',
          );
        }}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
};

export default CalendarComponent;

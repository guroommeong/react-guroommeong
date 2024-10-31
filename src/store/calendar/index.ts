import { create } from 'zustand';

interface CalendarState {
  startDate: Date;
  endDate: Date;
  key: string;
  update: (startDate: Date, endDate: Date, key: string) => void;
}

const useCalendarStore = create<CalendarState>(set => ({
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
  update: (startDate: Date, endDate: Date, key: string) => set({ startDate, endDate, key }),
}));

export default useCalendarStore;

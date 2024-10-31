import { create } from 'zustand';

interface CalendarState {
  startDate: Date;
  endDate?: Date;
  key: string;
  tripPlan: string; // 여행 계획 텍스트 상태 추가
  update: (startDate: Date, endDate: Date, key: string) => void;
  updateTripPlan: (tripPlan: string) => void; // 여행 계획 텍스트 업데이트 함수 추가
}

const useCalendarStore = create<CalendarState>(set => ({
  startDate: new Date(),
  endDate: undefined,
  key: 'selection',
  tripPlan: '', // 초기값 설정
  update: (startDate: Date, endDate: Date, key: string) => set({ startDate, endDate, key }),
  updateTripPlan: (tripPlan: string) => set({ tripPlan }), // tripPlan 업데이트 함수
}));

export default useCalendarStore;

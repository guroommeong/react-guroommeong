import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DogList from './features/dog-list/screen';
import Home from './features/home/screen';
import Calendar from './features/calendar/screen';
import MarchingDogList from './features/matching-dog/screen';
import LoadingScreen from './features/loadingScreen/screen';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doglist" element={<DogList />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/marchingDogList" element={<MarchingDogList />} />
        <Route path="/loading" element={<LoadingScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

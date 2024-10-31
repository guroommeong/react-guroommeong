import React from 'react';
import { Layout } from '../../components/layout/screen';
import { ReactComponent as Hamburger } from '../../../src/assets/dogImage/landingDogImg.svg';
import LandingPage from '../landing/screen';

const HomeScreen = () => {
  return (
    <Layout title={'메인'}>
      <LandingPage />

      <p>홈화면 입니다.</p>
      <Hamburger />
    </Layout>
  );
};

export default HomeScreen;

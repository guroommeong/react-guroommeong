import React from 'react';
import { Layout } from '../../components/layout/screen';
import { ReactComponent as Hamburger } from '../../../src/assets/dogImage/landingDogImg.svg';

const HomeScreen = () => {
  return (
    <Layout title={'메인'}>
      <p>홈화면 입니다.</p>
      <Hamburger />
    </Layout>
  );
};

export default HomeScreen;

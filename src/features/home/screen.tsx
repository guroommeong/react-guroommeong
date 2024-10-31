import React, { useState } from 'react';
import { HB2 } from '../../styled/Typography';

import CheckModal from '../../component/modal/checkModal';

const HomeScreen = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const toggleModal = () => setModalIsOpen(prev => !prev);

  return (
    <div>
      <CheckModal isOpen={modalIsOpen} toggleModal={toggleModal} modalContent={'??'} />
      <p>홈화면 입니다.</p>
      <button onClick={toggleModal} style={{ width: '400px', height: '400px' }} type="button">
        <HB2>랄라랄</HB2>
      </button>
    </div>
  );
};

export default HomeScreen;

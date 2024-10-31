import styled from 'styled-components';

const ModalContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 8px;

  gap: 8px;

  width: 340px;
  height: 279px;
  border: none;

  background: ${({ theme }) => theme.colors.blue4};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const ResButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 20px;

  gap: 8px;

  width: 164px;
  height: 244px;
  border: none;

  background: ${({ theme }) => theme.colors.blue2};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const LostButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 20px;
  padding-bottom: 8px;

  gap: 8px;
  align-items: center;
  width: 164px;
  height: 244px;
  border: none;

  background: ${({ theme }) => theme.colors.yellow2};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

export { ModalContainer, ResButton, LostButton };

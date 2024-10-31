import styled from 'styled-components';

const InputTextOwner = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 8px;
  align-items: center;
  width: 440px;
  height: 44px;
  border: none;

  background: ${({ theme }) => theme.colors.yellow3};

  border-radius: 12px;
  margin-bottom: 16px;
  padding: 11px 0 11px 12px;
`;

const StyledImageSquare = styled.img`
  width: 89px;
  height: 89px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

export { InputTextOwner, StyledImageSquare };

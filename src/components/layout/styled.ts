import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 73px;
  background-color: red;
`;

const StyledHeader = styled.header<{ hasChildren: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ hasChildren }) => (hasChildren ? '16px 0' : '0')};
`;

const StyledMain = styled.main`
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding: 0 10px;
`;

const StyledFooter = styled.footer<{ hasChildren: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ hasChildren }) => (hasChildren ? '16px 0' : '0')};
`;

export { StyledContainer, StyledHeader, StyledMain, StyledFooter };

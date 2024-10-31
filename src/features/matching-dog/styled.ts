import styled from 'styled-components';

const AICommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  padding: 10px 0 13px 0;
  gap: 8px;

  width: 340px;
  height: 109px;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const TagContiner = styled.div`
  background-color: #35383f;
  padding: 5px 20px;
  border-radius: 20px;
`;

export { AICommentContainer, TagContiner };

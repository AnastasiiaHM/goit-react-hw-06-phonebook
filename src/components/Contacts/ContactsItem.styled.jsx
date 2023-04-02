import styled from '@emotion/styled';

export const ListItem = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 4px;
  width: 100px;
  border: 2px solid #5b5d8f;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 500;
  color: #5b5d8f;
  background-color: lavender;
  &:hover {
    color: white;
    background-color: #5b5d8f;
  }
`;

import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  height: 35px;
  width: 100%;
  border: 1px solid #5b5d8f;
  border-radius: 3px;
  margin-top: 5px;
`;

export const Label = styled.label`
  font-size: 25px;
`;
export const Button = styled.button`
  padding: 10px;
  width: 200px;
  border: 2px solid #5b5d8f;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 500;
  color: #5b5d8f;
  background-color: lavender;
  margin-top: 15px;
  &:hover {
    color: white;
    background-color: #5b5d8f;
  }
`;

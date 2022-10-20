import styled from '@emotion/styled';
export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  background-color: #9dff04;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  font-size: 20px;
  padding: 12px;
  &:hover {
    opacity: 1;
  }
`;

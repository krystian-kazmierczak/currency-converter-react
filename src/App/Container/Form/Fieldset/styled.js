import styled from "styled-components";

export const Wrapper = styled.fieldset`
  border-color: ${({ theme }) => theme.colors.tenn};
  border-radius: 5px 10px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.wildSand};
`;
export const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: hsl(27deg 100% 40%);
`;

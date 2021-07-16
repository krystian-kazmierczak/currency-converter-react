import styled from "styled-components";

export const Field = styled.input`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.desertStorm};
  border-color: ${({ theme }) => theme.colors.tenn};
  outline-color: ${({ theme }) => theme.colors.tenn};
  color: ${({ theme }) => theme.colors.tenn};
  max-width: 200px;
  border-radius: 4px;
  width: 100%;
`;

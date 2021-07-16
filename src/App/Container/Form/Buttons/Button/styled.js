import styled from "styled-components";

export const StyledButton = styled.button`
  max-width: 200px;
  width: 100%;
  border: none;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.tenn};
  color: ${({ theme }) => theme.colors.wildSand};
  transition: background 0.5s;
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(120%);
  }
`;

import styled, { css } from "styled-components";

export const Info = styled.p`
  text-align: center;
  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.crimson};
    `};
`;

import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  ${({ smaller }) =>
    smaller &&
    css`
      font-size: 0.75rem;
    `}
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}
`;

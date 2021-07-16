import styled from "styled-components";

const Container = styled.main`
  max-width: 576px;
  padding: 5px 20px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.gallery};
  box-shadow: -10px 0px 13px -7px ${({ theme }) => theme.colors.tenn},
    10px 0px 13px -7px ${({ theme }) => theme.colors.tenn},
    5px 5px 1px 5px ${({ theme }) => theme.colors.transparent};
`;

export default Container;

import { StyledButton } from "./styled";

const Button = ({ type, title}) => (
  <StyledButton type={type}>
    {title}
  </StyledButton>
);
export default Button;

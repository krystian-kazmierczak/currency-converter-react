import "./style.css";

const Button = ({ type, title}) => (
  <button className="buttons__button" type={type}>
    {title}
  </button>
);
export default Button;

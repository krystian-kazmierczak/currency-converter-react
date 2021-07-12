import { currencies } from "../../../currencies";
import "./style.css";

const Select = ({currency, setCurrency}) => {
  
  return (
    <select
      className="form__input"
      value={currency}
      onChange={(event) => setCurrency(event.target.value)}
    >
      {currencies.map((currency) => (
        <option key={currency.shortcut} value={currency.shortcut}>
          {currency.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
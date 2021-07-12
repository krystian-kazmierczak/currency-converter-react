import Buttons from "./Buttons";
import Button from "./Buttons/Button";
import Fieldset from "./Fieldset";
import Input from "./Input";
import Select from "./Select";

const Form = () => (
  <form>
    <Fieldset label="Kwota w&nbsp;PLN*" body={<Input />} />
    <Fieldset label="Waluta docelowa*" body={<Select />} />
    <Fieldset label="Po przeliczeniu" body="wynik" />
    <Buttons>
      <Button type="submit" title="Przelicz" />
      <Button type="reset" title="Wyczyść formularz" />
    </Buttons>
  </form>
);

export default Form;

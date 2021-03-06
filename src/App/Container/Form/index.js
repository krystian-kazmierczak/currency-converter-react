import Buttons from "./Buttons/styled";
import Button from "./Buttons/Button";
import Fieldset from "./Fieldset";
import Input from "./Input";
import Select from "./Select";
import Result from "./Result";
import { useState } from "react";

const Form = ({ currencies }) => {
  const [currency, setCurrency] = useState(currencies[7].code);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ code }) => code === currency).mid;

    setResult({
      sourceAmount: amount,
      targetAmount: +amount / rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setCurrency(currencies[7].code);
    setAmount("");
    setResult();
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <Fieldset
        label="Kwota w&nbsp;PLN*"
        body={<Input amount={amount} setAmount={setAmount} />}
      />
      <Fieldset
        label="Waluta docelowa*"
        body={
          <Select
            currencies={currencies}
            currency={currency}
            setCurrency={setCurrency}
          />
        }
      />
      <Result result={result} />
      <Buttons>
        <Button type="submit" title="Przelicz" />
        <Button type="reset" title="Wyczyść" />
      </Buttons>
    </form>
  );
};

export default Form;

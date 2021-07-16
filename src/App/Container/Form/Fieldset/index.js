import "./style.css";

const Fieldset = ({ label, body }) => (
    <fieldset className="form__fieldset">
      <label className="form__label">
        <p>{label}</p>
        {body}
      </label>
    </fieldset>
  );

export default Fieldset;
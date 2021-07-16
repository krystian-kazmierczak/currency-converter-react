import { Wrapper, Label} from "./styled";

const Fieldset = ({ label, body }) => (
    <Wrapper>
      <Label >
        <p>{label}</p>
        {body}
      </Label>
    </Wrapper>
  );

export default Fieldset;
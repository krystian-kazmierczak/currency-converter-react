import { Paragraph } from "./styled";

const Result = ({ result }) => (
  <Paragraph>
    {!!result && (
      <>
        {Number(result.sourceAmount).toFixed(2)}&nbsp;PLN ={" "}
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </Paragraph>
);

export default Result;

import "./style.css";

const Result = ({ result }) => (
  <p className="paragraph">
    {!!result && (
      <>
        {Number(result.sourceAmount).toFixed(2)}&nbsp;PLN ={" "}
        <strong>
          {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);

export default Result;

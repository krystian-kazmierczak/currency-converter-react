import "./style.css";

const Result = ({ result }) => (
  <p className="paragraph">
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)} PLN =&nbsp;
        <strong>
          {result.targetAmount.toFixed(2)} {result.currency}
        </strong>
      </>
    )}
  </p>
);

export default Result;

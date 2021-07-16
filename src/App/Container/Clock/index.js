import { Paragraph } from "./styled";
import { useCarrentDate } from "./useCarrentDate";

const Clock = () => {
  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      day: "numeric",
      weekday: "long",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  return <Paragraph>Dzisiaj jest: {formatDate(useCarrentDate())}</Paragraph>;
};

export default Clock;

import { useEffect, useState } from "react";
import "./style.css";

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

  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(formatDate(new Date()));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p className="clock">Dzisiaj jest: {date}</p>;
};

export default Clock;

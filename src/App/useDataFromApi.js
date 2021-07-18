import { useEffect, useState } from "react";

export const useDataFromApi = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const getRatesData = async () => {
      try {
        const response = await fetch(
          "https://api.nbp.pl/api/exchangerates/tables/a/"
        );
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const data = await response.json();
     
        setRatesData({
          date: data[0].effectiveDate,
          table: data[0].no,
          rates: data[0].rates,
          status: "success",
        });
      } catch (error) {
        setRatesData({ status: "error" });
      }
    };
    setTimeout(getRatesData, 2000);
  }, []);
  return ratesData;
};

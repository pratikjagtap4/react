import { useState } from "react";
import { useEffect } from "react";

function CurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    async function fetchData() {
      try {
        const response = await fetch(url);
        const res = await response.json();
        setData(res[currency]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [currency]);

  return data;
}

export default CurrencyInfo;

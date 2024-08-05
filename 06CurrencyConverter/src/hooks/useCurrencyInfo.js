import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
  const [data, setData] = useState();

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data[currency]));
  }, [currency]);
  return data;
}

export default useCurrencyinfo;

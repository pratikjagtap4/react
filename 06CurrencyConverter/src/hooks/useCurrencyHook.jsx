import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState()
    useEffect(() => {
        async function fetchData() {
            const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

            const response = await fetch(url);
            const jsonData = await response.json();


            setData(jsonData[currency]);
        }
        fetchData();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
export const BitcoinRates = () => {
    const [currency, setCurrency] = useState(currencies[0]);
    const [exchangeRate, setExchangeRate] = useState(null);

    // updated useEffect hook from previous slide
    useEffect(() => {
        console.log("Fetching bitcoin rates");
        let ignore = false; // flag to allow ignoring of the fetch result

        fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        )
            .then((response) => response.json())
            .then((json) => {
                // only update state if the effect is still valid
                // ie. the dependency hasn't changed since the request

                /*bitcoin: 
                    aud: 83501 */
                if (!ignore) {
                    console.log(json);
                    setExchangeRate(json.bitcoin[currency.toLowerCase()]);
                }
            });

        // cleanup function - runs when unmounted or dependencies change
        return () => {
            ignore = true; // ignore now invalid fetch results
            console.log("cleanup effect");
        };
    }, [currency]); // effect dependencies
    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}

    const options = currencies.map((curr) => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>
                Choose currency:
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    {options}
                </select>
            </label>
            <h4>
                1 Bitcoin is worth {exchangeRate} {currency}&apos;s
            </h4>
        </div>
    );
};

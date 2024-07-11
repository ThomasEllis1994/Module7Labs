import { useEffect, useState } from "react";

export const usePriceInBitcoin = (currency) => {
    const [priceInBitcoin, setPriceInBitcoin] = useState(null);
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

                if (!ignore) {
                    console.log(json);
                    setPriceInBitcoin(json.bitcoin[currency.toLowerCase()]);
                }
            });

        // cleanup function - runs when unmounted or dependencies change
        return () => {
            ignore = true; // ignore now invalid fetch results
            console.log("cleanup effect");
        };
    }, [currency]); // effect dependencies
    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}

    return priceInBitcoin;
};

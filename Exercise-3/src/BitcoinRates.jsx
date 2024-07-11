import { useState } from "react";
import { usePriceInBitcoin } from "./usePriceInBitcoin";
import { EmojiProvider } from "./context/EmojiContext";
import Emoji from "./Emoji";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
export const BitcoinRates = () => {
    const [currency, setCurrency] = useState(currencies[0]);
    const priceInBitcoin = usePriceInBitcoin(currency);

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
                1 Bitcoin is worth {priceInBitcoin} {currency}&apos;s
            </h4>
            <EmojiProvider>
                <Emoji />
            </EmojiProvider>
        </div>
    );
};

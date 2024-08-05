import { useId } from "react";

function InputBox({
    label,
    isDisable = false,
    amount,
    onAmountChange,
    selectedCurrency = "usd",
    onCurrencyChange,
    currencyInfo = {},
    className = "",
}) {
    const inputId = useId()
    const options = Object.keys(currencyInfo)

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label
                    htmlFor={inputId}
                    className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id="inputId"
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={isDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {
                        options.map((currency) => <option key={currency} value={currency}> {currency} </option>)
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;

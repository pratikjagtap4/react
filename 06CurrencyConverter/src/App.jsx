import { useState } from "react";
import { InputBox } from "./components";
import CurrencyInfo from "./customHooks/CurrencyInfo";

function App() {
  const [amount, setAmount] = useState()
  const [convertedAmount, setConvertedAmount] = useState();
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencies = CurrencyInfo(from)
  const currencyOptions = Object.keys(currencies)

  function swap() {
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    setFrom(to)
    setTo(from)
  }

  function convert() {
    setConvertedAmount(amount * currencies[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('./src/assets/background.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
                options={currencyOptions}
                onCurrencyChange={(currency) => setFrom(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                selectedCurrency={to}
                options={currencyOptions}
                onCurrencyChange={(currency) => setTo(currency)}
                amount={convertedAmount}
                onAmountChange={(amount) => setConvertedAmount(amount)}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
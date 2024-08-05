import { useState } from 'react';
import './App.css'
import { InputBox } from './components';
import useCurrencyinfo from './hooks/useCurrencyInfo';
function App() {

  const [amount, setAmount] = useState()
  const [convAmount, setConvAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyinfo(from);

  function swap() {
    setFrom(to)
    setTo(from)
    setAmount(convAmount)
    setConvAmount(amount)
  }

  function convert() {
    setConvAmount(amount * Number(currencyInfo[to]))
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('src/assets/backgroundimage.jpg')` }}
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
                label="from"
                isDisable={false}
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyInfo={currencyInfo}
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
                label="to"
                isDisable={true}
                amount={convAmount}
                onAmountChange={(amount) => setConvAmount(amount)}
                selectedCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyInfo={currencyInfo}
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

export default App

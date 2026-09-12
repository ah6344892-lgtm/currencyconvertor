import { useEffect, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [fromInput, setFromInput] = useState("usd")
  const [toInput, setToInput] = useState("inr")
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (fromInput == from && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    }
  }, [formData])

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    const currencyFrom = fromInput.toLowerCase()
    if (!options.includes(currencyFrom)) {
      alert(`Invalid currency from: ${fromInput}`)
      return
    }
    if (!options.includes(toInput.toLowerCase())) {
      alert(`Invalid currency to: ${toInput}`)
      return
    }
    if (amount <= 0) {
      alert("Amount should be greater than 0")
      return
    }
    if (currencyFrom == toInput.toLowerCase()) {
      alert("From and To currency should be different")
      return
    }
    const data = {
      amount: amount,
      from: currencyFrom,
      to: toInput.toLowerCase(),
    }
    setFrom(currencyFrom)
    setFormData(data)
  }

  return (
    <div
      className="w-full px-2 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/538811669/photo/manhattan-panorama-with-its-skyscrapers-illuminated-at-dusk-new-york.jpg?b=1&s=612x612&w=0&k=20&c=X8o1ebGMKwGVh-Ae2QLwYbc2SZkKMzTi9dTZHDuWorI=')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFromInput(currency)}
                selectCurrency={fromInput}
                onAmountChange={(amount) => setAmount(amount)}

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
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(curr) => setToInput(curr)}
                selectCurrency={toInput}
                amountDisable

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {fromInput.toUpperCase()} to {toInput.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App

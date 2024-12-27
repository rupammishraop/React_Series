
import { useState } from 'react'
import './App.css'
import InputBox from './components/inputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {

   let [amount,setAmount] = useState(0);
   let [from, setFrom] = useState("usd")
   let [to, setTo] = useState("inr")
   let [convertAmount, setConvertedAmount] = useState(0);

   let currencyInfo = useCurrencyInfo(from);

  //  let options = object.key(currencyInfo);
   let options = Object.keys(currencyInfo);
   console.log(options);

  
    let convert = ()=>{
      setConvertedAmount(amount * currencyInfo[to]);
    }
    let swap = ()=>{
      setFrom(to);
      setTo(from);
      setConvertedAmount(amount);
      setAmount(convertAmount);
     }
  
  return (
    <>
      <div className="container">
        <div className="currencyConvertorApp">
          <form 
           onSubmit={(e)=>{
            e.preventDefault();
            convert();
           }}
          >
            <div>
              <InputBox 
              label="From"
              amonut={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) =>{
                setFrom(currency)
              }}
              selectCurrency={from}
              onAmountChange={(amount) =>{
                setAmount(amount)
              }}
              currencyDisable
              />
            </div>
            <div>
              <button className='swapBtn'
              onClick={swap}
              >
                Swap
              </button>
            </div>
            <div>
              <InputBox 
              label="To"
              amonut={convertAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              />
             
            </div>
            <div className='mainBtn'>
              <div >
                <button className='convert'>Convert</button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App

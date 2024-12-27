import React, { useId } from 'react'
import './inputBox.css'
function InputBox({
  label,
  amonut,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {

  let amonutId = useId();  //for Binding
  return (
    <>
      <div className='mainContainer'>
        <div className='inputBox'>
          <label htmlFor={amonutId}>
            {label}
          </label>
          <input
            id={amonutId} //binding with label
            type="number"
            placeholder='Amount'
            disabled={amountDisable}
            value={amonut}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className='currencyBox'>
          <p>Currency Type</p>
          <select
            disabled={currencyDisable}
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          >

            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default InputBox
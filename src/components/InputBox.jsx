import React from 'react'
import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {

    const amountId = useId()
    const infinity = Number.POSITIVE_INFINITY


    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    max={infinity}
                    min={0}
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <div>
                    <input
                        list="currencyOptions"
                        name='searchCurrency'
                        placeholder="Search Currency"
                        className="rounded-lg px-1 py-1 bg-gray-100 outline-none"
                        value={selectCurrency && selectCurrency.toUpperCase()}
                        onChange={(e) => {
                            return onCurrencyChange && onCurrencyChange(e.target.value)
                        }}
                    />
                    <datalist id="currencyOptions">
                        {currencyOptions.map((curr) =>
                        (<option key={curr} value={curr}>
                            {curr}
                        </option>)
                        )}
                    </datalist>
                    {/* <input
                        name='searchCurrency'
                        placeholder="Search Currency"
                        className="rounded-lg px-1 py-1 bg-gray-100 outline-none"
                        value={selectCurrency}
                        onChange={(e) => {

                            return () => {
                                onCurrencyChange && onCurrencyChange(e.target.value),
                                    < select
                                        name='currencySelectOption'
                                        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                                        value={selectCurrency}
                                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                                        disabled={currencyDisable}
                                    >
                                        {currencyOptions.map((curr) =>
                                        (<option key={curr} value={curr}>
                                            {curr}
                                        </option>)
                                        )}

                                    </select>
                            }

                        }}
                    /> */}
                </div>
                {/* <select
                    name='currencySelectOption'
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((curr) =>
                    (<option key={curr} value={curr}>
                        {curr}
                    </option>)
                    )}

                </select> */}
            </div>
        </div >
    );
}

export default InputBox;


// export default InputBox
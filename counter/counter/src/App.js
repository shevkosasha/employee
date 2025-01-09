import { useState, useEffect } from 'react';
import './App.css';

function App(props) {

  const сurrencyCodes = ['USD','EUR','PLN','RUB'];

  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState(сurrencyCodes[0]);
  let [exchangeRateData, setExchangeRateData] = useState({});
  const [value, setValue] = useState(amount);

  const fetchData = async () => {
    fetch(`https://api.nbrb.by/exrates/rates/${currency}?parammode=2`)
      .then(response => response.json())
      .then(data => {
        setExchangeRateData({...data});
      })
  }

  useEffect( () => {
    document.title = `${amount}  ${currency}`;
  }, [amount, currency]);

  useEffect( () => {
    if (amount <= 0) {
      return;
    }
    if (isNaN(exchangeRateData.Cur_OfficialRate)) {
      fetchData();
    }
  }, [amount]);

  useEffect( () => {
    if (amount <= 0) {
      return;
    }
    fetchData();
  }, [currency]);

  useEffect( () => {
    if (exchangeRateData == null) {
      return;
    }
    const {Cur_OfficialRate , Cur_Scale} = exchangeRateData
    const exchangeValue = isNaN(Cur_OfficialRate) ? 0 : (amount / Cur_OfficialRate * Cur_Scale).toFixed(3);
    setValue(exchangeValue);
  }, [amount, exchangeRateData]);

  const handleChangeAmount = (e) => setAmount(() => e.target.value < 0 ? 0 : e.target.value);
  const handleCurrency = (e) => setCurrency(e.target.value);

  return (
    <div class="app">
      <div class="input"><input class='input' type='number' value={amount} tabIndex={0} size={5} onChange={handleChangeAmount} /></div>
      <div class="counter">{value} {currency}</div>
      <div class="controls">
        {
          сurrencyCodes.map(code => (<button onClick={handleCurrency} value={code}> {code} </button>))
        }
      </div>
    </div>
  )
}

export default App;

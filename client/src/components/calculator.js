import LogIn from "./logIn";

import { Fragment } from "react";
import axios from "axios";

import { useState, useEffect } from "react";

const Calculator = (props) => {
  //fetching data from the backend
  const [backendData, setbackendData] = useState([{}]);

  const filteredData = backendData.filter((shown) => {
    return shown.exists === true;
  });
  // console.log(filteredData);

  useEffect(() => {
    fetch("/selected")
      .then((response) => response.json())
      .then((list) => {
        setbackendData(list);
      });
  }, []);

  //console.log(backendData);

  // //fetching converted amount from the backend
  const [converted, setconverted] = useState("");

  console.log(converted);

  //login popup window
  const [cart, showCart] = useState(false);

  const showLogIn = () => {
    showCart(true);
  };
  const hideLogIn = () => {
    showCart(false);
    //
  };

  //getting value from select BaseCurrency
  const [baseCurrency, setbaseCurrency] = useState("Euro");

  const handleBaseCurrencyChange = (event) => {
    setbaseCurrency(event.target.value);
    //console.log("value is:", baseCurrency);
  };

  //getting value from select TargetCurrency
  const [targetCurrency, settargetCurrency] = useState("Euro");

  const handleTargetCurrencyChange = (event) => {
    settargetCurrency(event.target.value);
    // console.log("value is:", targetCurrency);
  };
  //getting value from amount
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    //console.log("value is:", amount);
  };

  //sending the values to the backend

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:9000/insert", {
          baseCurrency,
          targetCurrency,
          amount,
        })
        .then((res) => {
          if (res.data === 0) {
            alert("Failed to found the currency");
          } else {
            console.log(res.data);
            setconverted(res.data);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Fragment>
      <header>
        <h1>Calculator</h1>
      </header>
      <form className="action-form" action="POST">
        <div className="transformation">
          <div className="currencys">
            <label className="baseCurrency">Base Currency</label>

            <select name="base-currency" onChange={handleBaseCurrencyChange}>
              {typeof filteredData === "undefined"
                ? console.log("error")
                : filteredData.map((currency, i) => (
                    <option key={i}>{currency.name}</option>
                  ))}
            </select>

            <label className="targetCurrency">Target Currency</label>

            <select
              name="target-currency"
              onChange={handleTargetCurrencyChange}
            >
              {typeof filteredData === "undefined"
                ? console.log("error")
                : filteredData.map((currency, i) => (
                    <option key={i}>{currency.name}</option>
                  ))}
            </select>
          </div>

          <label className="amount">Amount</label>
          <input
            className="amount-box"
            onChange={handleAmountChange}
            type="number"
            placeholder="Please enter your amount"
          ></input>

          <label className="converted-amount">Converted Money</label>
          <p>{converted}</p>

          <button className="btn btn--submit" onClick={submit}>
            Submit
          </button>
        </div>
      </form>

      <div>
        <button onClick={showLogIn} className=" btn btn-currencies">
          +
        </button>
      </div>

      {cart && <LogIn onClose={hideLogIn} />}
    </Fragment>
  );
};

export default Calculator;

import "./currency.css";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";

function Nomismata(props) {
  //fetching data from the backend
  const [currencyData, setcurrencyData] = useState([{}]);

  useEffect(() => {
    fetch("/selected")
      .then((response) => response.json())
      .then((data) => {
        setcurrencyData(data);
      });
  }, []);

  //send the name of the currency to the server

  const handleButtonNameChange = async (e, name) => {
    e.preventDefault(); // Prevent the default button click behavior

    try {
      await axios.post("http://localhost:9000/api/update", {
        name,
      });
      console.log(name);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Fragment>
      <div className="nomisma">
        {typeof currencyData !== "undefined" && (
          <ul>
            {currencyData.map((currency) => (
              <li className="list-of-currencies" key={currency?.id}>
                <div className="add-remove-form">
                  <form action="POST">
                    <p>{currency?.name}</p>
                    {currency?.exists === true ? (
                      <button
                        className="btn btn-add"
                        onClick={(e) =>
                          handleButtonNameChange(e, currency.name)
                        }
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        className="btn btn-add"
                        onClick={(e) =>
                          handleButtonNameChange(e, currency.name)
                        }
                      >
                        Add
                      </button>
                    )}
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Fragment>
  );
}

export default Nomismata;

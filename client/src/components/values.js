import { useState, useEffect } from "react";
import "./currency.css";
function Values(props) {
  const [valueData, setvalueData] = useState([{}]);
  //i split my data to 11 lists based on the Base Currency
  const Euro = valueData.filter((i) => {
    return i.BaseCurrency === "Euro";
  });
  const UsDollar = valueData.filter((i) => {
    return i.BaseCurrency === "Us Dollar";
  });
  const BritishPound = valueData.filter((i) => {
    return i.BaseCurrency === "British Pound";
  });
  const IndianRupee = valueData.filter((i) => {
    return i.BaseCurrency === "Indian Rupee";
  });
  const AustralianDollar = valueData.filter((i) => {
    return i.BaseCurrency === "Australian Dollar";
  });
  const CanadianDollar = valueData.filter((i) => {
    return i.BaseCurrency === "Canadian Dollar";
  });
  const SingaporeDollar = valueData.filter((i) => {
    return i.BaseCurrency === "Singapore Dollar";
  });
  const SwissFranc = valueData.filter((i) => {
    return i.BaseCurrency === "Swiss Franc";
  });
  const MalaysianRinggit = valueData.filter((i) => {
    return i.BaseCurrency === "Malaysian Ringgit";
  });
  const JapaneseYen = valueData.filter((i) => {
    return i.BaseCurrency === "Japanese Yen";
  });
  const ChineseYuanRenminbi = valueData.filter((i) => {
    return i.BaseCurrency === "Chinese Yuan Renminbi";
  });

  //fetching the data from node so i can render render to the screen
  useEffect(() => {
    fetch("/update")
      .then((response) => response.json())
      .then((data) => {
        setvalueData(data);
      });
  }, []);

  return (
    <div className="the-two-col-of-currencies-values">
      <div>
        {typeof valueData !== "undefined" && (
          <ul>
            {Euro.map((currency, i) => (
              <li key={i}>
                <div className="value-list">
                  <p>
                    {currency?.BaseCurrency}-{currency?.TargetCurrency}
                  </p>

                  <p>{currency?.value}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {typeof valueData !== "undefined" && (
          <ul>
            {UsDollar.map((currency, i) => (
              <li key={i}>
                <div className="value-list">
                  <p>
                    {currency?.BaseCurrency}-{currency?.TargetCurrency}
                  </p>

                  <p>{currency?.value}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {typeof valueData !== "undefined" && (
          <ul>
            {BritishPound.map((currency, i) => (
              <li key={i}>
                <div className="value-list">
                  <p>
                    {currency?.BaseCurrency}-{currency?.TargetCurrency}
                  </p>

                  <p>{currency?.value}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {typeof valueData !== "undefined" && (
          <ul>
            {IndianRupee.map((currency, i) => (
              <li key={i}>
                <div className="value-list">
                  <p>
                    {currency?.BaseCurrency}-{currency?.TargetCurrency}
                  </p>

                  <p>{currency?.value}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {typeof valueData !== "undefined" && (
          <ul>
            {AustralianDollar.map((currency, i) => (
              <li key={i}>
                <div className="value-list">
                  <p>
                    {currency?.BaseCurrency}-{currency?.TargetCurrency}
                  </p>

                  <p>{currency?.value}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {typeof valueData !== "undefined" && (
          <ul>
            {CanadianDollar.map((currency, i) => (
              <li key={i}>
                <div className="value-list">
                  <p>
                    {currency?.BaseCurrency}-{currency?.TargetCurrency}
                  </p>

                  <p>{currency?.value}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {typeof valueData !== "undefined" && (
          <ul>
            {SingaporeDollar.map((currency, i) => (
              <li key={i}>
                <div className="value-list">
                  <p>
                    {currency?.BaseCurrency}-{currency?.TargetCurrency}
                  </p>

                  <p>{currency?.value}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {typeof valueData !== "undefined" && (
          <ul>
            {SwissFranc.map((currency, i) => (
              <li key={i}>
                <div className="value-list">
                  <p>
                    {currency?.BaseCurrency}-{currency?.TargetCurrency}
                  </p>

                  <p>{currency?.value}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {typeof valueData !== "undefined" && (
          <ul>
            {MalaysianRinggit.map((currency, i) => (
              <li key={i}>
                <div className="value-list">
                  <p>
                    {currency?.BaseCurrency}-{currency?.TargetCurrency}
                  </p>

                  <p>{currency?.value}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {typeof valueData !== "undefined" && (
          <ul>
            {JapaneseYen.map((currency, i) => (
              <li key={i}>
                <div className="value-list">
                  <p>
                    {currency?.BaseCurrency}-{currency?.TargetCurrency}
                  </p>

                  <p>{currency?.value}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {typeof valueData !== "undefined" && (
          <ul>
            {ChineseYuanRenminbi.map((currency, i) => (
              <li key={i}>
                <div className="value-list">
                  <p>
                    {currency?.BaseCurrency}-{currency?.TargetCurrency}
                  </p>

                  <p>{currency?.value}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Values;

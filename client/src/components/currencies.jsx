import { useNavigate } from "react-router-dom";
import Nomismata from "./currency";
import Values from "./values";

function Currencies() {
  //Navigation
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div>
      <ul className="CurrencyItem">
        <Nomismata />
      </ul>
      <h1 className="h1-currencies">Values</h1>
      <hr></hr>
      <Values />
      <button className="btn btn-currencies" onClick={routeChange}>
        Go Back
      </button>
    </div>
  );
}

export default Currencies;

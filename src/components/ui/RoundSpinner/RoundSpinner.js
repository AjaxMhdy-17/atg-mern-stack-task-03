import Spinner from "react-bootstrap/Spinner";
import './spinner.css'

const RoundSpinner = () => {
  return <div className="take__spinner__center">
    <Spinner animation="border" variant="dark" />
  </div>
};

export default RoundSpinner;

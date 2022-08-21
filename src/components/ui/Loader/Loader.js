import Spinner from "react-bootstrap/Spinner";
import './loader.css'

const Loader = () => {
  return (
    <div className="center_loader">
      <Spinner animation="grow" variant="success" />
    </div>
  );
};

export default Loader;

import cross from "../../img/X.png";
import success from "../../img/success.png";
// import "./buds.css";

function Buds() {
  return (
    <>
      <div className="lungs-outer-div border-0 rounded-5 d-flex flex-column justify-content-center h-50 shadow">
          <div className="d-flex flex-row m-2">
          <div className="col flex-grow-5">
              <small className="text-muted">Kidneys</small>
              <h5 className="card-title">Hurt</h5>
            </div>
            <div className="col-3 ">
              <img src="https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614397-x-512.png" className="img-fluid rounded-start" alt="X" />
            </div>
          </div>
      </div>
    </>
  );
};

export default Buds;
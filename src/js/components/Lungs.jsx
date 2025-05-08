import success from "../../img/success.png";
import lungs from "../../img/lungs.jpg";
// import "./lungs.css";

function Lungs() {
  return (
    <>
      <div className="lungs-outer-div border-0 rounded-5 d-flex flex-column justify-content-center w-100 shadow">
      <div className="d-flex flex-row m-2">
        <div className="col-3 ">
        <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/15-512.png" className="img-fluid rounded-start" alt="X" />
        </div>
        <div className="col flex-grow-5">
        <small className="text-muted">Lungs</small>
        <h5 className="card-title">Excellent</h5>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div className="m-2">
          <img src={ lungs } className="img-fluid rounded-5 w-50 h-50" alt="lungsImage"></img>
        </div>
      </div>
    </div>
    </>
  );
}

export default Lungs;

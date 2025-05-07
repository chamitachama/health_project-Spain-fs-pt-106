import success from "../../img/success.png";
import lungs from "../../img/lungs.jpg";
// import "./lungs.css";

function Lungs() {
  return (
    <>
      <div className="lungs-outer-div">
        <div className="card mb-3" style={{ maxWidth: "200px" }}>
          <div className="row g-0">
            <div className="pill col-md-4">
              <img src={success} className="img-fluid rounded-start" alt="X" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <small className="text-muted">Lungs</small>
                <p className="card-text"></p>
                <p className="card-text"></p>
                  <h5 className="card-title">Excellent</h5>
                  <img src={ lungs } className="card-img-bot" alt="lungsImage"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lungs;

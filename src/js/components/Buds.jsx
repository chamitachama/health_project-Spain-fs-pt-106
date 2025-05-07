import cross from "../../img/X.png";
import success from "../../img/success.png";
// import "./buds.css";

function Buds() {
  return (
    <>
      <div className="outer-div">
        <div className="card mb-3" style={{ maxWidth: "200px" }}>
          <div className="row g-0">
            <div className="pill col-md-4">
              <img src={cross} className="img-fluid rounded-start" alt="X" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <small className="text-muted">Buds</small>
                <p className="card-text"></p>
                <p className="card-text">
                  <h5 className="card-title">Hurted</h5>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buds;

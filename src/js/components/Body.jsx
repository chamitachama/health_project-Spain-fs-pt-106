import React from "react";
import Buds from "./Buds.jsx";
import Lungs from "./Lungs.jsx";
import "./Body.css";

//include images into your bundle
import humanBody from "../../img/human-body.jpg";

//create your first component
function Body() {
  return (
    <>
      <div className="container body-container text-center">
        <div className="d-flex gap-2 justify-space-between">
          <div className="d-flex top-left flex-start">
            <Buds />
          </div>
          <div className="d-flex top-right flex-end">
            <Lungs />
          </div>
        </div>

        <div className="justify-content-center">
          <img className="text-center" src={humanBody} />
        </div>
        {/* Body Parts */}
      </div>
      <div>
        {/* Emoticons */}
        <div className="col emoticons">
          <div className="emoticon super-happy">😆</div>
          <div className="emoticon happy">🙂</div>
          <div className="emoticon neutral">😑</div>
          <div className="emoticon sad">😕</div>
          <div className="emoticon angry">😡</div>
        </div>
      </div>
    </>
  );
}

export default Body;

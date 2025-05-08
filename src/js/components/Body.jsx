import React from "react";
import Buds from "./Buds";
import Lungs from "./Lungs";

//include images into your bundle
import humanBody from "../../img/human-body.jpg";

//create your first component
function Body() {
  return (
    <>
    <div className="container-fluid body-container m-0 rounded-5">
      <div className="body-photo text-center">
        {/* <div className="d-flex gap-2 justify-space-between">
          <div className="d-flex top-left flex-start">
            <Buds />
          </div>
          <div className="d-flex top-right flex-end">
            <Lungs />
          </div>
        </div>

        <div className="justify-content-center d-flex flex-row">
        <div className="col emoticons z-1">
          <div className="emoticon super-happy">😆</div>
          <div className="emoticon happy">🙂</div>
          <div className="emoticon neutral">😑</div>
          <div className="emoticon sad">😕</div>
          <div className="emoticon angry">😡</div>
        </div>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Body;

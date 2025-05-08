import React from "react";
import Buds from "./Buds";
import Lungs from "./Lungs";

//create your first component
function Body() {
  return (
    <>
    <div className="container-fluid body-container m-0 rounded-5 d-flex">
      <div className="body-photo text-center">
        <div className="row d-flex justify-space-between">
          <div className="d-flex col m-3">
            <Buds />
          </div>
          <div className="d-flex col m-3">
            <Lungs />
          </div>
        </div>

        <div className="justify-content-start d-flex border-0">
        <div className="emoticons rounded-pill p-2 shadow d-flex flex-column justify-content-center">
          <div className="emoticon super-happy">😆</div>
          <div className="emoticon happy">🙂</div>
          <div className="emoticon neutral">😑</div>
          <div className="emoticon sad">😕</div>
          <div className="emoticon angry">😡</div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Body;

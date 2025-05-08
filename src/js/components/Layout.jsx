import React from "react";
import Sidebar from "./Sidebar";
import Calendario from "./Calendario";
import Corazon from "./Corazon";
import Tools from "./Tools";
import Body from "./Body";
import HeaderButtons from "./Header";
import ButtonBase from "./ButtonBase";




function Layout() {
  return (
    <>
      <div className="container-fluid bg-custom p-4">
        <div className="row d-flex">
          <div className="col-md-1 bg-custom border-end border-secondary">
            <Sidebar />
          </div>
          <div className="col bg-custom mh-100 d-flex">
              <div className="row d-flex">
              </div>
            <main className="flex-grow-1 d-flex flex-column p-3 mh-90 ">
                <div className="row mb-5 align-items-center">
                  <div className="col-4 ms-3">
                    <h3>PrimeMed</h3> 
                 </div>
                 <HeaderButtons />
                </div>
              <div>
                <Tools />
              </div>
              <div className="row gap-3 p-4">
                <div className="col-5">
                  <Corazon />
                </div>
                <div className="col">
                  <Body />
                </div>
                <div className="col p-0">
                  <Calendario />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;

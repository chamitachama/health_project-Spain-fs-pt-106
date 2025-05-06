import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Calendario from "./Calendario";
import Body from "./Body";

function Layout() {
  return (
    <>
      <div className="container-fluid vh-100 bg-custom p-4">
        <div className="row d-flex h-100">
          <div className="col-md-1 bg-custom border-end border-secondary">
            <Sidebar />
          </div>
          <div className="col bg-custom">
            Componente NAvBAr
            <main className="flex-grow-1 d-flex flex-column p-3 h-100">
              ComponenteTOOLS
              <div className="row h-100 gap-3 p-4">
                <div className="col-sm-4 bg-light">componente 1</div>
                <div className="col col-sm-3 bg-light">
                  <Body />
                </div>
                <div className="col col-sm-3 bg-light p-0">
                  <Calendario />
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </>
  );
}

export default Layout;

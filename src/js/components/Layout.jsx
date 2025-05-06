import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Calendario from "./Calendario"
import Corazon from "./Corazon";

function Layout() {
  return (
    <>
      <div className="container-fluid bg-custom p-4">
        <div className="row d-flex">
          <div className="col-md-1 bg-custom border-end border-secondary">
            <Sidebar />
          </div>
          <div className="col bg-custom">
            Componente NAvBAr
            <main className="flex-grow-1 d-flex flex-column p-3 ">
              ComponenteTOOLS
              <div className="row gap-3 p-4">
                <div className="col-5 bg-light"><Corazon /></div>
                <div className="col bg-light">componente 2</div>
                <div className="col p-0"><Calendario /></div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
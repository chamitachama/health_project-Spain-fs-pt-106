import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <div className="container-fluid vh-100 bg-custom p-4">
        <div className="row d-flex h-100">
          <div className="col-md-1 bg-custom border-end border-secondary">
            {children} <Sidebar />
          </div>
          <div className="col bg-custom">
            {children}Componente NAvBAr
            <main className="flex-grow-1 d-flex flex-column p-3 h-100">
              {children}ComponenteTOOLS
              <div className="row h-100 gap-3 p-4">
                <div className="col-5 bg-light">{children}componente 1</div>
                <div className="col bg-light">{children}componente 2</div>
                <div className="col bg-light">{children}Componente 3</div>
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

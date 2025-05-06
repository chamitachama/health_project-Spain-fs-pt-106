import Botonera from "./Botonera";

function Sidebar() {
  return (
    <>
      <div className="vh-100 d-flex flex-column align-items-center">
        <a className="justify-content-center mb-4" href="#">
          <img src="src/img/brand-logo.png" height={80} />
        </a>
        <div className="d-flex align-self-center rounded">
          <Botonera />
        </div>
      </div>
    </>
  );
}

export default Sidebar;

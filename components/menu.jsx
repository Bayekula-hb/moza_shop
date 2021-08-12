import Image from "next/image";

const Menu = () => {

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light container justify-content-between">
      <h1>
        {/* <a className="navbar-brand col-7 head__title" href="#Home"><Image src="image" alt="image"/> Market</a> */}
        <a className="navbar-brand col-7 head__title" href="#Home"> Market</a>
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse col-5" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 col justify-content-end">
          <li className="nav-item active">
            <a className="nav-link" href="#Home">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">
              A propos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Skills">
              Compétences
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects">
              Projets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
module.exports = Menu;

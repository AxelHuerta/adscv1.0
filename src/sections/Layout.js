// permite el uso de links dinamicos
import { NavLink, Outlet } from "react-router-dom";

// fuente de iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTooth, //logo
  faHouse, // principal
  faUsers, // pacientes
  faCalendar, // citas
  faBell, // solicitudes
} from "@fortawesome/free-solid-svg-icons";

// main
const Layout = () => {
  return (
    <>
      {/* navbar, menu principal */}
      <nav className="navbar">
        {/* logo */}
        <div className="nav-icon logo">
          <FontAwesomeIcon
            icon={faTooth}
            style={{ fontSize: "1em", margin: ".5em" }}
          />
          <p>Logo</p>
        </div>
        <NavLink to={"/"} className="nav-icon" activeClassName="active">
          <FontAwesomeIcon
            icon={faHouse}
            style={{ fontSize: "1em", margin: ".5em" }}
          />
          <p>página principal</p>
        </NavLink>
        {/* Link a la seccion pacientes */}
        <NavLink
          to={"/Pacientes"}
          className="nav-icon"
          activeClassName="active"
        >
          <FontAwesomeIcon
            icon={faUsers}
            style={{ fontSize: "1em", margin: ".5em" }}
          />
          <p>Listado de pacientes</p>
        </NavLink>
        {/* link a la seccion citas */}
        <NavLink to={"/Citas"} className="nav-icon" activeClassName="active">
          <FontAwesomeIcon
            icon={faCalendar}
            style={{ fontSize: "1em", margin: ".5em" }}
          />
          <p>Citas próximas</p>
        </NavLink>
        {/* link a la seccion solicitudes */}
        <NavLink
          to={"/Solicitudes"}
          className="nav-icon"
          activeClassName="active"
        >
          <FontAwesomeIcon
            icon={faBell}
            style={{ fontSize: "1em", margin: ".5em" }}
          />
          <p>Solicitudes de citas</p>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;

// permite el uso de links dinamicos
import { Link, NavLink, Outlet } from "react-router-dom";

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
        <Link className="nav-icon">
          <FontAwesomeIcon
            icon={faTooth}
            style={{ fontSize: "2em", color: "white" }}
          />
          <p>Logo</p>
        </Link>
        <NavLink to={"/"} className="nav-icon" activeClassName="active">
          <FontAwesomeIcon icon={faHouse} style={{ fontSize: "2em" }} />
          <p>Principal</p>
        </NavLink>
        {/* Link a la seccion pacientes */}
        <NavLink
          to={"/Pacientes"}
          className="nav-icon"
          activeClassName="active"
        >
          <FontAwesomeIcon icon={faUsers} style={{ fontSize: "2em" }} />
          <p>Pacientes</p>
        </NavLink>
        {/* link a la seccion citas */}
        <NavLink to={"/Citas"} className="nav-icon" activeClassName="active">
          <FontAwesomeIcon icon={faCalendar} style={{ fontSize: "2em" }} />
          <p>Citas</p>
        </NavLink>
        {/* link a la seccion solicitudes */}
        <NavLink to={"/Solicitudes"} className="nav-icon" activeClassName="active">
          <FontAwesomeIcon icon={faBell} style={{ fontSize: "2em" }} />
          <p>Solicitudes</p>
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;

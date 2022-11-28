import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

// renglon de un paciente
const PatientRow = ({
  id = null,
  name = null,
  apat = null,
  amat = null,
  age = null,
  gender = null,
}) => {
  return (
    <div className="patients-info-list list-impar">
      <li>{id}</li>
      <li>{name}</li>
      <li>{apat}</li>
      <li>{amat}</li>
      <li>{age}</li>
      <li>{gender}</li>
      <Link to={"/FichaPaciente"}>
        <li>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </li>
      </Link>
      <Outlet />
    </div>
  );
};

export default PatientRow;

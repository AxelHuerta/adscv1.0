// fuente de iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const Pacientes = () => {
  return (
    <div className="principal">
      <h1>listado de pacientes</h1>
      <div className="patient-list">
        <div className="table-title-patient">
          <li>ID paciente</li>
          <li>nombre</li>
          <li>apellido paterno</li>
          <li>apellido materno</li>
          <li>edad</li>
          <li>sexo</li>
          <li></li>
        </div>
        {/* datos de los pacientes */}
        <div className="patients-info-list list-impar">
          <li>p-0000</li>
          <li>alison</li>
          <li>martínez</li>
          <li>guevara</li>
          <li>23</li>
          <li>mujer</li>
          <li>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </li>
        </div>
        <div className="patients-info-list">
          <li>p-0001</li>
          <li>andrea</li>
          <li>carranza</li>
          <li>segura</li>
          <li>18</li>
          <li>mujer</li>
          <li>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </li>
        </div>
        <div className="patients-info-list list-impar">
          <li>p-0003</li>
          <li>eduardo tonatiuh</li>
          <li>serrano</li>
          <li>espinoza</li>
          <li>31</li>
          <li>hombre</li>
          <li>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Pacientes;

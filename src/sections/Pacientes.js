// fuente de iconos
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Btn from "../elements/Btn";
import PatientRow from "../elements/PatientRow";

const Pacientes = () => {
  return (
    <div className="principal">
      {/* header */}
      <div className="header">
        <h1>listado de pacientes</h1>
        <Btn text={"agregar paciente"} ico={faUserPlus} position={"right"} />
      </div>

      {/* contenido principal */}
      <div className="block">
        <div className="list">
          <div className="grid-7 header-list">
            <li>ID paciente</li>
            <li>nombre</li>
            <li>apellido paterno</li>
            <li>apellido materno</li>
            <li>edad</li>
            <li>sexo</li>
            <li></li>
          </div>
          {/* datos de los pacientes */}
          <PatientRow
            id={"p-0000"}
            name={"Alison"}
            apat={"Martínez"}
            amat={"Guevara"}
            age={23}
            gender={"mujer"}
          />
          <PatientRow
            id={"p-0001"}
            name={"Andrea"}
            apat={"Carranza"}
            amat={"Segura"}
            age={18}
            gender={"mujer"}
          />

          <PatientRow
            id={"p-0003"}
            name={"Eduardo Tonatiuh"}
            apat={"Serrano"}
            amat={"Espinoza"}
            age={31}
            gender={"hombre"}
          />
        </div>
      </div>
    </div>
  );
};

export default Pacientes;

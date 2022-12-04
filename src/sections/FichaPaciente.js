import Btn from "../elements/Btn";
import GridArea from "../elements/GridArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faUserPen,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const FichaPaciente = () => {
  return (
    <div className="principal">
      {/* cabecera */}
      <div className="header">
        <div className="header-profile">
          <h2>listado de pacientes</h2>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ fontSize: "1.2em", margin: "0 .5em" }}
          />
          <h2>lorem ipsum dolo</h2>
        </div>
        <Btn text={"editar perfil"} ico={faUserPen} position={"right"} />
      </div>

      <hr className="hline" />

      {/* informacion general */}
      <div className="grid-2-1-2">
        <div className="block">
          <center>
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ fontSize: "4em", margin: ".3em" }}
            />
            <h3 style={{ marginBottom: "1em" }}>lorem ipsum dolor</h3>
          </center>

          {/* la cantidad de elementos de content siempre debe ser multiplo de gridNumber */}
          {/* los array dento de content deben ser dos */}
          <GridArea
            gridNumber={3}
            content={[
              ["sexo", "mujer"],
              ["edad", 25],
              ["teléfono", "55 0123 4567"],
            ]}
          />
        </div>

        {/* identifiacion del paciente */}
        <div className="block">
          <center>
            <h2 className="margin-b">identificación del paciente</h2>
            <GridArea
              gridNumber={3}
              content={[
                ["lugar de nacimiento", "CDMX"],
                ["fecha de nacimiento", "1997"],
                ["estado civil", "soltera"],
              ]}
            />
            <hr className="hline" />
            <GridArea
              gridNumber={3}
              content={[
                ["dirección", "calle falsa no. 123, iztapalapa, CDMX"],
                ["educación", "universidad"],
                ["ocupación", "estudiante"],
              ]}
            />
            <hr className="hline" />

            {/* datos de emergencia */}
            <h2 className="margin-b">en caso de emergencia</h2>
            <GridArea
              gridNumber={3}
              content={[
                ["avisar a", "fulanito de tal"],
                ["parentesco", "hermano"],
                ["teléfono", "55 0987 6543"],
              ]}
            />
            <hr className="hline" />
          </center>
        </div>

        {/* anamnesis remota */}
        <div className="block">lorem ipsum</div>
      </div>
    </div>
  );
};

export default FichaPaciente;

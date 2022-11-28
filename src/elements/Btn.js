import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Btn = ({text, ico, position}) => {
  return (
    <div className={position}>
      <button className="btn">
        <FontAwesomeIcon icon={ico} style={{marginRight: ".5em"}}/>
        {text}</button>
    </div>
  );
};

export default Btn;

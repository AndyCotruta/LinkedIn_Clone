import { propTypes } from "react-bootstrap/esm/Image";

const ActionLi = (props) => {
  return (
    <button className="action-li mb-1 d-flex align-items-center justify-content-center">
      <div className="mr-1">{props.text}</div>
      {props.icon}
    </button>
  );
};

export default ActionLi;

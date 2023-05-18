const GreyBorderBtn = (props) => {
  return (
    <button className="GR-Btn d-flex align-items-center">
      {props.icon}
      <div className="mx-1">{props.content}</div>
      {props.iconTwo}
    </button>
  );
};

export default GreyBorderBtn;

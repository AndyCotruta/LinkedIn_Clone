const EditLi = (props) => {
  return (
    <li className="sidebarLi py-3 fw-bold linkedin-d-grey d-flex justify-content-between">
      <div>{props.text}</div>{" "}
      <div className="mx-1">
        <img src="Exclude.png" alt="" />
      </div>
    </li>
  );
};

export default EditLi;

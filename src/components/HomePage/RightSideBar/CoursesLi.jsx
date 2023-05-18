const CoursesLi = (props) => {
  return (
    <li className="sidebarLi d-flex align-items-center pt-3 pb-1">
      <div className="courses-preview">
        <img
          className="courses-img"
          src={props.imgSource}
          alt="Course Preview"
        />
        <div className="courses-play-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            className="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M4 14V2l10 6z"></path>
          </svg>
        </div>
      </div>
      <div className="courses-name fw-bold ml-2">{props.courseName}</div>
    </li>
  );
};

export default CoursesLi;

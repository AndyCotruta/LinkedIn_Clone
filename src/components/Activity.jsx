import arrow from "../Icon/arrow.svg";

const Activity = () => {
  return (
    <div>
      <div className="activity-section cd width cd ff ">
        <h3 className="activity-title fs-20 fw-700 margin-0">Activity</h3>
        <span className="activity-followers fs-14 ld-grey">7874 followers</span>
        <p className="activity-status fs-16 fw-800"> User hasn't posted lately</p>
        <p className="activity-info fs-14">User’s recent posts and comments will be displayed here.</p>
      </div>
      <div className="show-activity d-flex justify-content-center fs-16 fw-700 cd-bottom-btn ">
        Show all activity
        <img src={arrow} alt="" className="icon" />
      </div>
    </div>
  );
};

export default Activity;

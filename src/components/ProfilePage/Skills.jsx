import endorsed from "../../Icon/Network.svg";

const Skills = () => {
  return (
    <div className="skills-section">
      <h3 className="fs-20 fw-700">Skills</h3>
      <div className="skills-content d-flex-column">
        <div>
          <p className="fs-16 fw-800 mt-3">React.js</p>
        </div>
        <div className="skills-logo d-flex align-items-center mt-3 mb-3">
          {/* <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1678924800&v=beta&t=g39mEwT0a4f25zx4YdClQnGd6q0Yb2ilFisuB3EPfng"
            alt=""
          /> */}

          <p className="fs-14">Endorsed by 3 colleagues at EPICODE</p>
        </div>
        <p className="fs-14 d-flex align-items-end">
          <img src={endorsed} alt="" className="mr-2" /> 21 endorsements
        </p>
      </div>
    </div>
  );
};

export default Skills;

import GreyBorderBtn from "../Buttons/GreyBorderBtn";

const Licenses = () => {
  return (
    <div className="experience-section ">
      <h3 className=" fs-20 fw-700">Licenses & certifications</h3>
      <div className="experience-content">
        {/* <div className="experience-logo">
          <img src="https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1678924800&v=beta&t=g39mEwT0a4f25zx4YdClQnGd6q0Yb2ilFisuB3EPfng" alt="" />
        </div> */}
        <div>
          <p className="fs-16 fw-800">React: Using TypeScriptReact</p>
          <p className="fs-14">LinkedIn</p>
          <span className="fs-14 ld-grey">Issued Aug 2020 </span>
          <span className="fs-14 ld-grey"> No Expiration Date </span>
          {/* <button className="gray-button show-credential ld-btn">
            Show Credential
          </button> */}
          <div className="pt-2">
            <GreyBorderBtn content={"Show Credential"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licenses;

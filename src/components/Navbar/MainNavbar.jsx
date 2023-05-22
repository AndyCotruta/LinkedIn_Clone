import {
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
  Container,
  NavLink,
} from "react-bootstrap";
import search from "../../Icon/Search.svg";
import logomini from "../../Icon/Logo-nav.svg";
import home from "../../Icon/Home.svg";
import mynetwork from "../../Icon/myNetwork.svg";
import jobs from "../../Icon/jobs.svg";
import message from "../../Icon/Message.svg";
import notification from "../../Icon/notification.svg";
import work from "../../Icon/work.svg";
import { useNavigate } from "react-router-dom";
import SearchModel from "../Navbar/SearchModel";
import BlueBorderBtn from "../Buttons/BlueBorderBtn";
import BlueButton from "../Buttons/BlueButton";
import {
  ADD_CLICKED_PROFILE,
  ADD_MY_PROFILE,
  fetchPosts,
} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

const MainNavbar = ({ signUp, setSignUp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myProfile = useSelector((state) => state.profiles.myProfile);
  const allProfiles = useSelector((state) => state.profiles.allProfiles.users);

  const [homeClicked, setHomeClicked] = useState(true);
  const [showSearchSmall, setShowSearchSmall] = useState(false);
  const [searchResults, setSearchedResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    dispatch({
      type: ADD_MY_PROFILE,
      payload: null,
    });
    navigate("/login");
  };

  useEffect(() => {
    if (allProfiles) {
      const filteredResults = allProfiles.filter(
        (profile) =>
          profile.firstName.toLowerCase().includes(query) ||
          profile.lastName.toLowerCase().includes(query)
      );
      setSearchedResults(filteredResults);
    }
  }, [query]);

  return (
    <div expand="lg" className="navbar-main">
      <Container className="px-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center ">
            <div
              className="logo-mini"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={logomini} alt="" />
            </div>

            {myProfile && (
              <Form inline className="search-container">
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={query}
                  className="mr-sm-2 search-input"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
                {searchResults.length !== 0 && query && (
                  <div className="search-model">
                    {searchResults.slice(0, 5).map((result) => (
                      <SearchModel
                        resultData={result}
                        key={result._id}
                        setQuery={setQuery}
                      />
                    ))}
                  </div>
                )}
              </Form>
            )}
          </div>

          <div className={myProfile ? "flex-grow-1" : ""}>
            <div
              className={
                myProfile
                  ? "elapsed-menu mr-auto d-flex align-items-center justify-content-between"
                  : ""
              }
            >
              {myProfile && (
                <>
                  <Nav.Link
                    className={
                      showSearchSmall
                        ? "search-icon p-0 search-icon-clicked"
                        : "search-icon p-0"
                    }
                    onClick={() => {
                      setShowSearchSmall(!showSearchSmall);
                    }}
                  >
                    <div className=" d-flex flex-column align-items-center  nav-icon menu-size">
                      <div>
                        <img src={search} alt="" className="nav-menu-icon" />
                      </div>
                      <p className="fs-12 nav-text">Search</p>
                    </div>
                  </Nav.Link>

                  <Nav.Link className="p-0">
                    <div
                      className=" d-flex flex-column align-items-center nav-icon menu-size"
                      onClick={() => {
                        setHomeClicked(true);
                        dispatch(fetchPosts);
                        navigate("/");
                      }}
                    >
                      <div>
                        <img
                          src={home}
                          alt=""
                          className={
                            homeClicked
                              ? "nav-menu-icon-clicked"
                              : "nav-menu-icon"
                          }
                        />
                      </div>
                      <p className="fs-12 nav-text">Home</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="p-0">
                    <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                      <div>
                        <img src={mynetwork} alt="" className="nav-menu-icon" />
                      </div>
                      <p className="fs-12 nav-text">My Network</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="p-0">
                    <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                      <div>
                        <img src={jobs} alt="" className="nav-menu-icon" />
                      </div>
                      <p className="fs-12 nav-text">Jobs</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="p-0">
                    <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                      <div>
                        <img src={message} alt="" className="nav-menu-icon" />
                      </div>
                      <p className="fs-12 nav-text">Messaging</p>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="p-0">
                    <div className=" d-flex flex-column align-items-center nav-icon menu-size">
                      <div>
                        <img
                          src={notification}
                          alt=""
                          className="nav-menu-icon"
                        />
                      </div>
                      <p className="fs-12 nav-text">Notifications</p>
                    </div>
                  </Nav.Link>

                  <div className="profile-drop-down menu-size">
                    <img
                      src={myProfile.image}
                      alt=""
                      className="profile-icon"
                    />
                    <NavDropdown
                      title="Me"
                      id="basic-nav-dropdown"
                      className="profile-name"
                    >
                      <NavDropdown.Item
                        className="d-flex align-items-center px-2 pb-2"
                        onClick={() => {
                          setHomeClicked(false);
                          navigate(`/profile/${myProfile._id}`);
                          dispatch({
                            type: ADD_CLICKED_PROFILE,
                            payload: myProfile,
                          });
                        }}
                      >
                        <div className="mr-2">
                          <img
                            src={myProfile.image}
                            alt=""
                            className="profile-icon2"
                          />
                        </div>
                        <div style={{ color: "black" }} className="text-wrap">
                          <div className="fs-16 fw-700 text-center">
                            {myProfile.firstName} {myProfile.lastName}
                          </div>
                          <div className="fs-14">{myProfile.title}</div>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action/3.1.2"
                        className="nav-view-profile-btn"
                        onClick={() => {
                          setHomeClicked(false);
                          navigate(`/profile/${myProfile._id}`);
                        }}
                      >
                        <BlueBorderBtn
                          content={"View Profile"}
                          className="flex-grow-1"
                        />
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <div href="#action/3.2" className=" fs-16 fw-800 px-2">
                        Account
                      </div>
                      <div
                        href="#action/3.2.1"
                        className="dropdown-secondary-action pt-2 fs-14  px-2"
                      >
                        Try premium for free
                      </div>
                      <div
                        href="#action/3.2.2"
                        className="dropdown-secondary-action pt-2 fs-14  px-2"
                      >
                        Settings & Privacy
                      </div>
                      <div
                        href="#action/3.2.3"
                        className="dropdown-secondary-action pt-2 fs-14  px-2"
                      >
                        Help
                      </div>
                      <div
                        href="#action/3.2.4"
                        className="dropdown-secondary-action pt-2  fs-14  px-2"
                      >
                        Language
                      </div>
                      <NavDropdown.Divider />
                      <div
                        href="#action/3.3"
                        className="dropdown-main-action fs-16 fw-800 px-2"
                      >
                        Manage
                      </div>
                      <div
                        href="#action/3.3.1"
                        className="dropdown-secondary-action pt-2 fs-14  px-2"
                      >
                        Posts & Activity
                      </div>
                      <div
                        href="#action/3.3.2"
                        className="dropdown-secondary-action pt-2 fs-14  px-2"
                      >
                        Job Posting Account
                      </div>
                      <NavDropdown.Divider />
                      <div
                        className="fs-14  px-2 dropdown-signout"
                        onClick={() => {
                          handleSignOut();
                        }}
                      >
                        Sign Out
                      </div>
                    </NavDropdown>
                  </div>
                </>
              )}
              {myProfile ? (
                <div className="d-flex align-items-center network">
                  <div className="profile-drop-down menu-size work">
                    <img src={work} alt="" className="nav-menu-icon" />
                    <div className="work-text">Work</div>
                  </div>

                  <div className="fs-12 fw-700 premium">
                    <div>Network Smarter,</div> <div>Try premium Free!</div>
                  </div>
                </div>
              ) : (
                <div className="login-buttons">
                  <div
                    onClick={() => {
                      setSignUp(true);
                    }}
                  >
                    {signUp ? (
                      <BlueButton text={"Sign Up"} />
                    ) : (
                      <BlueBorderBtn content={"Sign Up"} />
                    )}
                  </div>
                  <div
                    onClick={() => {
                      setSignUp(false);
                    }}
                  >
                    {signUp ? (
                      <BlueBorderBtn content={"Log In"} />
                    ) : (
                      <BlueButton text={"Log In"} />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {showSearchSmall && (
          <div className="search-small-screens py-3">
            <div className="d-flex align-items-center">
              <input
                value={query}
                className="input-small-screens pl-3"
                placeholder="Search here..."
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>

            <div>
              {searchResults.length !== 0 &&
                query &&
                searchResults
                  .slice(0, 5)
                  .map((result) => (
                    <SearchModel
                      resultData={result}
                      key={result._id}
                      setQuery={setQuery}
                    />
                  ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
export default MainNavbar;

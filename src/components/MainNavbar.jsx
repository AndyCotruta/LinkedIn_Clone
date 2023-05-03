import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import "./MainNavbar.css";
import logomini from "../Icon/Logo-nav.svg";
import home from "../Icon/Home.svg";
import mynetwork from "../Icon/myNetwork.svg";
import jobs from "../Icon/jobs.svg";
import message from "../Icon/Message.svg";
import notification from "../Icon/notification.svg";
import work from "../Icon/work.svg";
import { useNavigate } from "react-router-dom";
import SearchModel from "./SearchModel";

// import { ADD_QUERY, ADD_SEARCH_RESULTS, CHANGE_CLICKED_SEARCH_STATUS } from "../redux/actions/actions";
import {
  ADD_CLICKED_PROFILE,
  ADD_MY_PROFILE,
  ADD_QUERY,
  ADD_SEARCH_RESULTS,
  CHANGE_CLICKED_SEARCH_STATUS,
} from "../redux/actions/actions";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MainNavbar = () => {
  const clickedSearch = useSelector((state) => state.search.clicked);
  const allProfiles = useSelector((state) => state.profiles.allProfiles);
  const searchResults = useSelector((state) => state.search.searchResults);
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filterProfiles = (e) => {
    dispatch({
      type: ADD_QUERY,
      payload: e,
    });

    const filteredResults = allProfiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(query) ||
        profile.surname.toLowerCase().includes(query)
    );
    dispatch({
      type: ADD_SEARCH_RESULTS,
      payload: filteredResults,
    });
  };

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    dispatch({
      type: ADD_MY_PROFILE,
      payload: null,
    });
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="navbar-main">
      <Container className="px-0">
        <div
          className="d-flex justify-content-between"
          style={{ width: "100%", paddingInline: "15px" }}
        >
          <div className="logo-on-collapse d-flex align-items-center ">
            <div
              className="logo-mini"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={logomini} alt="" />
            </div>

            <Form inline className="search-position">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 search-input"
                onClick={() => {
                  console.log("Search was clicked");
                  dispatch({
                    type: CHANGE_CLICKED_SEARCH_STATUS,
                    payload: !clickedSearch,
                  });
                }}
                onChange={(e) => {
                  setQuery(e.target.value);
                  filterProfiles(e.target.value);
                }}
              />
              {clickedSearch && (
                <div className="search-model ">
                  {searchResults.length !== 0 &&
                    searchResults
                      .slice(0, 5)
                      .map((result) => (
                        <SearchModel resultData={result} key={result._id} />
                      ))}
                </div>
              )}
            </Form>
          </div>

          <div className="menu-on-collapse">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="elapsed-menu mr-auto d-flex align-items-center">
                <Nav.Link className="p-0">
                  <div
                    className=" d-flex flex-column align-items-center nav-icon menu-size"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <div>
                      <img src={home} alt="" className="nav-menu-icon" />
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

                {myProfile && (
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
                        className="dropdown-main-action d-flex align-items-center"
                        onClick={() => {
                          navigate(`/profile/${myProfile._id}`);
                          dispatch({
                            type: ADD_CLICKED_PROFILE,
                            payload: myProfile,
                          });
                        }}
                      >
                        <span>
                          <img
                            src={myProfile.image}
                            alt=""
                            className="profile-icon2 mr-2"
                          />
                        </span>
                        <div style={{ color: "black" }}>
                          <p className="fs-16 fw-700">
                            {myProfile.name} {myProfile.surname}
                          </p>
                          <p className="fs-14 ">{myProfile.title}</p>
                        </div>
                      </NavDropdown.Item>
                      <div
                        href="#action/3.1.2"
                        className="dropdown-secondary-action d-flex justify-content-center mt-2 mb-2"
                      >
                        <Button
                          className="btn nav-view-profile-btn fs-14"
                          onClick={() => {
                            navigate(`/profile/${myProfile._id}`);
                          }}
                        >
                          View Profile
                        </Button>
                      </div>
                      <NavDropdown.Divider />
                      <div
                        href="#action/3.2"
                        className="dropdown-main-action fs-16 fw-800 ml-4"
                      >
                        Account
                      </div>
                      <NavDropdown.Item
                        href="#action/3.2.1"
                        className="dropdown-secondary-action fs-14"
                      >
                        Try premium for free
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action/3.2.2"
                        className="dropdown-secondary-action fs-14"
                      >
                        Settings & Privacy
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action/3.2.3"
                        className="dropdown-secondary-action fs-14"
                      >
                        Help
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action/3.2.4"
                        className="dropdown-secondary-action fs-14"
                      >
                        Language
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <div
                        href="#action/3.3"
                        className="dropdown-main-action fs-16 fw-800 ml-4"
                      >
                        Manage
                      </div>
                      <NavDropdown.Item
                        href="#action/3.3.1"
                        className="dropdown-secondary-action fs-14"
                      >
                        Posts & Activity
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action/3.3.2"
                        className="dropdown-secondary-action fs-14"
                      >
                        Job Posting Account
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        className="fs-14"
                        onClick={() => {
                          handleSignOut();
                        }}
                      >
                        Sign Out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                )}

                <div className="profile-drop-down menu-size work">
                  <img src={work} alt="" className="nav-menu-icon" />
                  <NavDropdown
                    title="Work"
                    id="basic-nav-dropdown"
                    className="profile-name "
                  ></NavDropdown>
                </div>
                <Nav.Link href="#premium" className="text-align-center ">
                  <p className="fs-12 fw-700 premium">Network Smarter,</p>{" "}
                  <p className="fs-12 fw-700 premium">Try premium Free!</p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
export default MainNavbar;

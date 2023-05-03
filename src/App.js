import MainNavbar from "./components/MainNavbar";
import MainFooter from "./components/MainFooter";
import "bootstrap/dist/css/bootstrap.min.css";

import { Col, Container, Row } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UserProfile from "./components/UserProfile";
import RightSideBar from "./components/RightSideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LogIn from "./components/LogInPage/LogIn";
import AnimationPage from "./components/AnimationPage/AnimationPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavbar />
        <Container>
          <Row>
            <Routes>
              <Route path="/profile/:userId" element={<UserProfile />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/redirect" element={<AnimationPage />} />
            </Routes>
          </Row>
          <MainFooter />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;

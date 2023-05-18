import MainNavbar from "./components/Navbar/MainNavbar";
import MainFooter from "./components/HomePage/MainFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./components/ProfilePage/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LogIn from "./components/LogInPage/LogIn";
import AnimationPage from "./components/AnimationPage/AnimationPage";
import { useState } from "react";

function App() {
  const [signUp, setSignUp] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <MainNavbar signUp={signUp} setSignUp={setSignUp} />
        <Container>
          <Row>
            <Routes>
              <Route path="/profile/:userId" element={<UserProfile />} />
              <Route path="/" element={<HomePage />} />
              <Route
                path="/login"
                element={<LogIn signUp={signUp} setSignUp={setSignUp} />}
              />
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

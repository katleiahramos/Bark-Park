import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import SignupForm from "./SignupForm";
import Welcome from "./Welcome";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={SignupForm}></Route>
        <Route exact path="/app" component={App}></Route>
        <Route exact path="/" component={Welcome}></Route>
      </div>
    </Router>
  );
};

export default AppRouter;

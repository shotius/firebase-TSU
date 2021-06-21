import React from "react";
import { AuthProvider } from "../context/AuthContext";
import SignUp from "./SignUp";
import Login from './Login'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/reset-password" component={ResetPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

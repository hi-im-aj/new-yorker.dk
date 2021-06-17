import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "../../firebase";
import { setIsAuth } from "../../actions/auth";
import Info from "../Info";
import Toolbar from "../Toolbar/Toolbar";

const Settings = ({ auth, setIsAuth }) => {
  const { isAuth } = auth;
  useEffect(() => {
    const close = firebase.auth().onAuthStateChanged((user) => {
      if (user && isAuth === false) setIsAuth(true);
      else if (!user && isAuth === true) setIsAuth(false);
    });
    return close;
  }, [isAuth, setIsAuth]);

  return isAuth ? (
    <div className="container">
      <Toolbar view="Settings" />
      <Info />
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default connect(
  (state) => ({
    auth: state.auth,
  }),
  { setIsAuth }
)(Settings);

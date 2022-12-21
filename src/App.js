import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { withTrans } from "./i18n/withTranslations";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { LOGOUT } from "./actions/types";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/routing/PrivateRoute";

// Views
import Home from "./views/Home";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import Header from "./components/layout/Header";
import Loading from "./components/layout/Loading";
import Profile from "./views/auth/Profile";
import ListToken from "./views/listToken/ListToken";

function App() {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="fixed top-0 left-0 w-screen">
          <Header />
          <Navbar />
        </div>
        <div className="h-[130px]"></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/user/profile"
            element={<PrivateRoute component={Profile} />}
          />
          <Route
            path="/list-token"
            element={<PrivateRoute component={ListToken} />}
          />
        </Routes>
        <Footer />
      </Router>
      <Loading />
      <ToastContainer theme="dark" />
    </Provider>
  );
}

export default withTrans(App);

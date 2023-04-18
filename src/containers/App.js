import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";
//
import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";
import { path } from "../utils";
import { CustomToastCloseButton } from "../components/CustomToast";
//
import Home from "./Main/home/Home";
import Account from "./Main/account/Account";
import Login from "./Main/login/Login";
import Register from "./Main/register/Register";
import System from "../routes/System";
import ConfirmModal from "../components/ConfirmModal";
//
import Topbar from "./Header/Topbar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./App.scss";
import CustomScrollbars from "../components/CustomScrollbars";
class App extends Component {
  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    this.handlePersistorState();

    
  }

  render() {
    return (
      <Fragment>
        <Router history={history}>
          <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
            <header id="header" className="header has-sticky sticky-jump">
              {/* <Route component={(Topbar)} /> */}
              <Route component={Header} />
            </header>
            {/*  */}
            <main className="main-container">
              <ConfirmModal />
              {/* {this.props.isLoggedIn && <Header />} */}

              <span className="content-container">
                <Switch>
                  <Route path={path.HOME} exact component={Home} />
                  <Route path={path.ACCOUNT} component={Account} />
                  <Route
                    path={path.LOGIN}
                    component={userIsNotAuthenticated(Login)}
                  />
                  {/* userIsNotAuthenticated  de kiem tra ng dung da dang nhap chua, neu chua dang nhap thi component se hien thi*/}
                  <Route path={path.REGISTER} component={Register} />
                  <Route path={path.SYSTEM} component={System} />
                </Switch>
              </span>

              <ToastContainer
                className="toast-container"
                toastClassName="toast-item"
                bodyClassName="toast-item-body"
                autoClose={false}
                hideProgressBar={true}
                pauseOnHover={false}
                pauseOnFocusLoss={true}
                closeOnClick={false}
                draggable={false}
                closeButton={<CustomToastCloseButton />}
              />
            </main>
            {/*  */}
            <footer id="footer" className="footer-wrapper">
              <Route component={Footer} />
            </footer>
          </CustomScrollbars>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

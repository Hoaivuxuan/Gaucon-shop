import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../../store/actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { Button } from 'reactstrap';
//
import { handleLoginApi } from "../../../services/userService";
import "./Login.scss";
// import { FormattedMessage } from 'react-intl';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      iShowPassword: false,
      errMessage: "",
    };
  }

  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      const data = await handleLoginApi(
        this.state.username,
        this.state.password
      );
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);

        this.setState({
          errMessage: data.message,
        });
      }
      console.log(data);
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
      console.log("hello", error.response);
    }
  };

  handleShowHidePassword = () => {
    this.setState({
      iShowPassword: !this.state.iShowPassword,
    });
  };

  render() {
    //JSX
    return (
      <div className="login-background">
        {/* <Link to="/about">
                    <img
                        src="https://newseven.vn/wp-content/uploads/2023/02/coverweb2.png"
                        alt="example"
                    />
                </Link> */}
        <div className="container">
          <div className="login-content row">
            <div className="left-col">
              <div className="col-12 login-text">
                <span>ĐĂNG</span> NHẬP
              </div>
              <div className="col-12 username">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={(event) => this.handleOnChangeUsername(event)}
                ></input>
              </div>
              <div className="col-12 password">
                <div className="custom-input-password">
                  <input
                    type={this.state.iShowPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(event) => this.handleOnChangePassword(event)}
                  ></input>
                  <span
                    onClick={() => {
                      this.handleShowHidePassword();
                    }}
                  >
                    <FontAwesomeIcon
                      className="eye"
                      icon={this.state.iShowPassword ? faEye : faEyeSlash}
                    />
                  </span>
                </div>
                <div className="col-12" style={{ color: "red" }}>
                  {this.state.errMessage}
                </div>
              </div>

              <div className="col-12">
                <button
                  className="col-12 btn-login btn-login-form"
                  onClick={() => {
                    this.handleLogin();
                  }}
                  type="submit"
                  value="login"
                >
                  Đăng nhập
                </button>
              </div>
              <div className="col-12 forgot-text">
                <a className="f-text" href="/">
                  Quên mật khẩu
                </a>
              </div>
              <div className="col-12 note-text">
                <span className="or-text">Hoặc đăng nhập bằng</span>
              </div>
              <div className="block social-login">
                <div className="d-flex justify-content-center page-signup-social-wrapper">
                  <div className="login-google">
                    <FontAwesomeIcon className="google" icon={faGoogle} />
                  </div>
                  <div className="login-facebook">
                    <FontAwesomeIcon className="facebook" icon={faFacebook} />
                  </div>
                </div>
              </div>
              <div className="register">
                Bạn chưa có tài khoản?
                <a className="create-acc" href="/account/register">
                  {" "}
                  Đăng ký ngay!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
    // userLoginFail: () => dispatch(actions.adminLoginFail()),
    userLoginSuccess: (userInfor) =>
      dispatch(actions.userLoginSuccess(userInfor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

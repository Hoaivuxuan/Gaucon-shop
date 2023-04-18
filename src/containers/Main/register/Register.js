import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../../store/actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faL } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { Button } from 'reactstrap';
//
import { createNewAccountService } from "../../../services/userService";
import "./Register.scss";
// import { FormattedMessage } from 'react-intl';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phonenumber: "",
      email: "",
      password: "",
      iShowPassword: false,
      errMessage: "",
    };
  }

  handleOnChangeinput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  handleShowHidePassword = () => {
    this.setState({
      iShowPassword: !this.state.iShowPassword,
    });
  };
  checkValidateInput = () => {
    let isValid = true;
    let arrInput = ["name", "phonenumber", "email", "password"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Mssing: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleAddNewAccount = async () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      this.createNewAccount(this.state);
      console.log("data", this.state);
    }
    // this.setState({
    //   errMessage: "",
    // });
    // try {
    //   const data = await createNewAccountService(
    //     this.state.name,
    //     this.state.phonenumber,
    //     this.state.email,
    //     this.state.password
    //   );
    //   if (data && data.errCode !== 0) {
    //     this.setState({
    //       errMessage: data.message,
    //     });
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     if (error.response.data) {
    //       this.setState({
    //         errMessage: error.response.data.message,
    //       });
    //     }
    //   }
    // }
  };
  createNewAccount = async (data) => {
    try {
      let response = await createNewAccountService(data);
      console.log("response: ", response);
    } catch (e) {
      console.log(e);
    }
    console.log("Check data: ", data);
  };
  render() {
    //JSX
    return (
      <div className="login-background">
        <div className="container">
          <div className="login-content row">
            <div className="left-col" createNewAccount={this.createNewAccount}>
              <div className="col-12 login-text">
                <span>ĐĂNG</span> KÝ
              </div>
              <div className="col-12 username">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Họ và tên"
                  value={this.state.name}
                  onChange={(event) => this.handleOnChangeinput(event, "name")}
                ></input>
              </div>
              <div className="col-12 username">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Số điện thoại"
                  value={this.state.phonenumber}
                  onChange={(event) =>
                    this.handleOnChangeinput(event, "phonenumber")
                  }
                ></input>
              </div>
              <div className="col-12 username">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(event) => this.handleOnChangeinput(event, "email")}
                ></input>
              </div>
              <div className="col-12 password">
                <div className="custom-input-password">
                  <input
                    type={this.state.iShowPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Mật khẩu"
                    value={this.state.password}
                    onChange={(event) =>
                      this.handleOnChangeinput(event, "password")
                    }
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
                <a
                  href="/account/login"
                  className="col-12 btn-login btn-login-form"
                  onClick={() => {
                    this.handleAddNewAccount();
                  }}
                  type="submit"
                  value="register"
                >
                  Đăng ký
                </a>
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
                <a className="create-acc" href="/">
                  {" "}
                  Đăng ký ngay!
                </a>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);

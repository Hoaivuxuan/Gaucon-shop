import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
import Carousel from "react-bootstrap/Carousel";
//
import * as actions from "../../../store/actions";
import { getAllUsers } from "../../../services/userService";
import "./Account.scss";
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }
  async componentDidMount() {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }
  render() {
    const { processLogout, userInfo } = this.props;
    let arrUsers = this.state.arrUsers;
    return (
      <div className="body">
        <section className="bread-crumb d-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col-12 a-left">
                <ul className="breadcrumb">
                  <li className="home">
                    <a href="/">
                      <span>Trang chủ</span>
                    </a>
                    <span className="mr_lr">&nbsp;/&nbsp;</span>
                  </li>
                  <li>
                    <a href="/accountt">
                      <span>Tài khoản</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {arrUsers &&
          arrUsers.map((item, index) => {
            return (
              <section className="signup page_customer_account" key={index}>
                <div className="container">
                  <div className="row">
                    <div className="col-left-ac">
                      <div className="block-account">
                        <div className="info info-1">
                          <img
                            src="//bizweb.dktcdn.net/100/438/408/themes/902941/assets/account_ava.jpg?1681378254504"
                            alt="Vu Xuan Hoai"
                          />
                          <p>{item.name}</p>
                          <a
                            className="click_logout"
                            href="/"
                            onClick={processLogout}
                          >
                            Đăng xuất
                          </a>
                        </div>
                        <ul>
                          <div>
                            <i className="fa-solid fa-user"></i>
                            <a
                              disabled="disabled"
                              className="title-info active"
                              href=""
                            >
                              {" "}
                              Tài khoản của tôi
                            </a>
                          </div>
                          <div>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <a className="title-info" href="/account/orders">
                              Đơn hàng của tôi
                            </a>
                          </div>
                          <div>
                            <i class="fa-solid fa-lock"></i>
                            <a
                              className="title-info"
                              href="/account/changepassword"
                            >
                              {" "}
                              Đổi mật khẩu
                            </a>
                          </div>
                          <div>
                            <i class="fa-solid fa-location-dot"></i>
                            <a className="title-info" href="/account/addresses">
                              {" "}
                              Sổ địa chỉ
                            </a>
                          </div>
                        </ul>
                      </div>
                    </div>
                    <div className="col-right-ac">
                      <h1 className="title-head margin-top-0">
                        Thông tin cá nhân
                        <button
                          className="btn-edit-addr btn btn-primarys btn-more"
                          type="button"
                          onclick="window.location.href='/account/addresses'"
                        >
                          Sửa thông tin
                        </button>
                      </h1>
                      <div className="form-signup name-account m992">
                        <p>
                          <strong>Họ và tên:</strong> {item.name}
                        </p>
                        <p>
                          <strong>Địa chỉ email:</strong> {item.email}
                        </p>
                        <p>
                          {" "}
                          <strong>Điện thoại:</strong> {item.phonenumber}{" "}
                        </p>
                        <p>
                          <strong>Địa chỉ:</strong> {item.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { processLogout: () => dispatch(actions.processLogout()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);

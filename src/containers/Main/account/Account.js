import React, { Component, Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
import Carousel from "react-bootstrap/Carousel";
//
import * as actions from "../../../store/actions";
import { getUsers, editAccount } from "../../../services/userService";
import Address from "./addresses/Address";
import "./Account.scss";
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalEdit: false,
      addressEdit: {},
    };
  }
  async componentDidMount() {
    // let response = await getUsers("ALL");
    // if (response && response.errCode === 0) {
    //   this.setState({
    //     arrUsers: response.users,
    //   });
    // }
  }

  handleEditInfo = (arrUsers) => {
    // console.log("check user info", arrUsers);

    this.setState({
      isOpenModalEdit: true,
      addressEdit: arrUsers,
    });
  };

  doEditInfo = async (arrUsers) => {
    try {
    let response = await editAccount(arrUsers);
      if (response && response.errCode === 0) {
        this.setState({
          isOpenModalEdit: false,
        });
      }
      else {
        alert(response.errCode)
      }
    } catch (e) {
      console.log(e);
    }
    // console.log("check save", res);
  };

  toggleInfoModal = () => {
    this.setState({
      isOpenModalEdit: !this.state.isOpenModalEdit,
    });
  };

  render() {
    const { processLogout, userInfo } = this.props;
    // console.log('test data', userInfo)
    let arrUsers = userInfo;
    // console.log("check arrUsers", arrUsers);
    return (
      <div className="body">
        {/*  */}
        {this.state.isOpenModalEdit && (
          <Address
            isOpen={this.state.isOpenModalEdit}
            toggleFromParent={this.toggleInfoModal}
            currentAddress={this.state.addressEdit}
            editAddress={this.doEditInfo}
          />
        )}
        {/*  */}
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

        <section className="signup page_customer_account">
          <div className="container">
            <div className="row">
              <div className="col-left-ac">
                <div className="block-account">
                  <div className="info info-1">
                    <img
                      src="//bizweb.dktcdn.net/100/438/408/themes/902941/assets/account_ava.jpg?1681378254504"
                      alt="Vu Xuan Hoai"
                    />
                    <p>{userInfo && userInfo.name}</p>
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
                      <i className="fa-solid fa-cart-shopping"></i>
                      <a className="title-info" href="/account/orders">
                        Đơn hàng của tôi
                      </a>
                    </div>
                    <div>
                      <i className="fa-solid fa-lock"></i>
                      <a className="title-info" href="/account/changepassword">
                        {" "}
                        Đổi mật khẩu
                      </a>
                    </div>
                    <div>
                      <i className="fa-solid fa-location-dot"></i>
                      <button
                        className="title-info"
                        onClick={() => this.handleEditInfo(arrUsers)}
                        style={{ border: "none", background: "white" }}
                      >
                        {" "}
                        Sổ địa chỉ
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="col-right-ac">
                <h1 className="title-head margin-top-0">
                  Thông tin cá nhân
                  <button
                    className="btn-edit-addr btn btn-primarys btn-more"
                    onClick={() => this.handleEditInfo(arrUsers)}
                  >
                    Sửa thông tin
                  </button>
                </h1>

                <div className="form-signup name-account m992">
                  <p>
                    <strong>Họ và tên:</strong> {userInfo && userInfo.name}
                  </p>
                  <p>
                    <strong>Địa chỉ email:</strong> {userInfo && userInfo.email}
                  </p>
                  <p>
                    {" "}
                    <strong>Điện thoại:</strong>{" "}
                    {userInfo && userInfo.phonenumber}{" "}
                  </p>
                  <p>
                    <strong>Địa chỉ:</strong> {userInfo && userInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { processLogout: () => dispatch(actions.processLogout()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);

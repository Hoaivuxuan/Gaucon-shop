import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
import Carousel from "react-bootstrap/Carousel";
import * as actions from "../../../store/actions";
import "./Account.scss";
class Account extends Component {
  render() {
    // let linkToRedirect = isLoggedIn ? "/" : "/login";
    const { processLogout } = this.props;
    return (
      // <Redirect to={linkToRedirect} />
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
                    <p>Vu Xuan Hoai</p>
                    <a
                      className="click_logout"
                      href="/"
                      onClick={processLogout}
                    >
                      Đăng xuất
                    </a>
                  </div>
                  <ul>
                    <li>
                      <a
                        disabled="disabled"
                        className="title-info active"
                        href="javascript:void(0);"
                      >
                        Tài khoản của tôi
                      </a>
                    </li>
                    <li>
                      <a className="title-info" href="/account/orders">
                        Đơn hàng của tôi
                      </a>
                    </li>
                    <li>
                      <a className="title-info" href="/account/changepassword">
                        Đổi mật khẩu
                      </a>
                    </li>
                    <li>
                      <a className="title-info" href="/account/addresses">
                        Sổ địa chỉ
                      </a>
                    </li>
                    <li>
                      <a className="title-info" href="/san-pham-da-xem">
                        Đã xem gần đây
                      </a>
                    </li>
                    <li>
                      <a className="title-info" href="/yeu-thich">
                        Sản phẩm yêu thích
                      </a>
                    </li>
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
                    <strong>Họ và tên:</strong> Vu Xuan Hoai
                  </p>
                  <p>
                    <strong>Địa chỉ email:</strong> vuxuanhoai28@gmail.com
                  </p>
                  <p>
                    {" "}
                    <strong>Điện thoại:</strong> 0363656128{" "}
                  </p>
                  <p>
                    <strong>Địa chỉ:</strong> tòa s202, chung cư smart city,
                    Quận Nam Từ Liêm, Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
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

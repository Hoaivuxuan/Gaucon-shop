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
class Mainn extends Component {
  render() {
    return (
      <div>
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
            <strong>Địa chỉ:</strong> tòa s202, chung cư smart city, Quận Nam Từ
            Liêm, Vietnam
          </p>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mainn);

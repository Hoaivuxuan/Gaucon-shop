import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "./Header.scss";

class Header extends Component {
  render() {
    const { processLogout } = this.props;

    return (
      <div className="header-wrapper">
        <div className="header-inner flex-row padding-left-right logo-left medium-logo-center">
          <div className="flex-col logo">
            <a href="/">
              <img src="http://127.0.0.1:5500/src/assets/gau-logo-removebg-preview.png" />
            </a>
          </div>

          <div className="flex-col hide-for-medium flex-left flex-grow">
            <ul className="header-nav header-nav-main nav nav-left  nav-line-grow nav-size-large nav-spacing-medium nav-uppercase">
              <li className="home">
                <a href="/" aria-current="page" className="nav-top-link">
                  HOME
                </a>
              </li>
              <li className="product">
                <a className="dropbtn">
                  SHOP
                  <i class="fa-solid fa-angle-down"></i>
                </a>
                <div className="product-content">
                  <a href="#">Áo</a>
                  <a href="#">Quần</a>
                  <a href="#">Phụ Kiện</a>
                </div>
              </li>
              <li className="contract">
                <a href="/" className="nav-top-link">
                  CONTACT
                </a>
              </li>
              <li className="group">
                <a href="/" className="nav-top-link">
                  GROUP
                </a>
              </li>
              <li className="row search-form">
                <div className="col-10 form-outline flex-col">
                  <input
                    type="search"
                    className="form-control"
                    id="datatable-search-input"
                    placeholder="Search..."
                  />
                </div>
                <div class="col-1">
                  <button
                    type="submit"
                    value="Tìm kiếm"
                    className="search-icon"
                    aria-label="Submit"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div className="hide-for-medium flex-right">
            <ul className="header-nav header-nav-main nav nav-right  nav-line-grow nav-size-large nav-spacing-medium nav-uppercase">
              <li className="cart-item has-icon has-dropdown">
                <a href="/">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
              <li className="account-item has-icon">
                <a href="/">
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-logout" onClick={processLogout}>
            <i className="fas fa-sign-out-alt"></i>
          </a>
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
  return {
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

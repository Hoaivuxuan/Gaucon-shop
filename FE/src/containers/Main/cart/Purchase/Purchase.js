import React, { Component } from "react";
import { connect } from "react-redux";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
import "./Purchase.scss";
class Purchase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="main">
        <div className="checkout-page-title page-title container">
          <div className="page-title-inner flex-row medium-flex-wrap container">
            <div className="flex-col flex-grow medium-text-center">
              <nav className="breadcrumbs flex-row flex-row-center heading-font checkout-breadcrumbs text-center strong h2 uppercase">
                <a href="/cart" className="current">
                  GIỎ HÀNG{" "}
                </a>
                <span className="divider hide-for-small">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
                <a href="/checkout" className="hide-for-small">
                  CHI TIẾT THANH TOÁN{" "}
                </a>
                <span className="divider hide-for-small">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
                <a href="/purchase" className="no-click hide-for-small">
                  HOÀN THÀNH{" "}
                </a>
              </nav>
            </div>
          </div>
          <h2>Coming Soon...</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Purchase);

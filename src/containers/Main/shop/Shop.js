import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./Shop.scss";
//
class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <div className="shop-page-title category-page-title page-title ">
          <div className="page-title-inner row  medium-flex-wrap container">
            <div class="col-8 flex-grow medium-text-center">
              <div class="is-large">
                <nav class="woocommerce-breadcrumb breadcrumbs uppercase">
                  <a href="/">Trang chủ</a>{" "}
                  <span class="divider">/</span> Shop
                </nav>
              </div>
            </div>
            <div class="col medium-text-center row">
              <p class="col woocommerce-result-count hide-for-medium">
                Hiển thị 1-10 của 30
              </p>
              <form class="col woocommerce-ordering" method="get">
                <select
                  name="orderby"
                  class="orderby"
                  aria-label="Đơn hàng của cửa hàng"
                >
                  <option value="menu_order" selected="selected">
                    Mặc định
                  </option>
                  <option value="popularity">Bán chạy</option>
                  <option value="rating">Đánh giá</option>
                  <option value="date">Mới nhất</option>
                  <option value="price">Giá thấp đến cao</option>
                  <option value="price-desc">Giá cao xuống thấp</option>
                </select>
                <input type="hidden" name="paged" value="1" />
              </form>
            </div>
          </div>
        </div>
        <main className="products">

        </main>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

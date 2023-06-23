import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate, withRouter } from "react-router-dom";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
//
import showProducts from "../../../../services/userService";
//
import "./Payment.scss";
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: 1,
      product: [],
    };
  }
  componentDidMount() {
    console.log("check id payment test: ", this.props.match.params.id);
    this.fetchProduct(this.props.match.params.id);
  }
  fetchProduct = async (id) => {
    try {
      const res = await showProducts(id);
      this.setState({ product: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const {productCart, product } = this.state;
    // const {item} = this.props; 
    console.log("check value: ", this.props.item);
    return (
      <div className="main">
        <div className="checkout-page-title page-title">
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
        </div>
        {/*  */}
        {/* <div className=""></div> */}
        <div className="cart-container container page-wrapper page-checkout">
          <div className="woocommerce">
            <div className="woocommerce row row-large row-divided">
              <div
                style={{ borderRight: "2px solid gray" }}
                className="col-7 large-7 pb-0 "
              >
                <div className="clear">
                  <div className="woocommerce-billing-fields">
                    <h3>Thông tin thanh toán</h3>
                    <p
                      className="form-row form-row-wide validate-required"
                      id="billing_last_name_field"
                      data-priority="10"
                    >
                      <label for="billing_last_name" className="">
                        Họ và tên&nbsp;
                        <abbr className="required" title="bắt buộc">
                          *
                        </abbr>
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text "
                          name="billing_last_name"
                          id="billing_last_name"
                          placeholder="Họ tên của bạn"
                          value=""
                        />
                      </span>
                    </p>
                    <p
                      className="form-row form-row-wide validate-required"
                      id="billing_last_name_field"
                      data-priority="10"
                    >
                      <label for="billing_last_name" className="">
                        Số điện thoại&nbsp;
                        <abbr className="required" title="bắt buộc">
                          *
                        </abbr>
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text "
                          name="billing_last_name"
                          id="billing_last_name"
                          placeholder="Số điện thoại"
                          value=""
                        />
                      </span>
                    </p>
                    <p
                      className="form-row form-row-wide validate-required"
                      id="billing_last_name_field"
                      data-priority="10"
                    >
                      <label for="billing_last_name" className="">
                        Địa chỉ email (không bắt buộc)&nbsp;
                        <abbr className="required" title="bắt buộc">
                          *
                        </abbr>
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text "
                          name="billing_last_name"
                          id="billing_last_name"
                          placeholder="Địa chỉ email"
                          value=""
                        />
                      </span>
                    </p>
                    <p
                      className="form-row form-row-wide validate-required"
                      id="billing_last_name_field"
                      data-priority="10"
                    >
                      <label for="billing_last_name" className="">
                        Địa chỉ giao hàng&nbsp;
                        <abbr className="required" title="bắt buộc">
                          *
                        </abbr>
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text "
                          name="billing_last_name"
                          id="billing_last_name"
                          placeholder="Địa chỉ giao hàng"
                          value=""
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="clear">
                  <p
                    className="form-row notes"
                    id="order_comments_field"
                    data-priority=""
                  >
                    <label for="order_comments" className="">
                      Ghi chú đơn hàng&nbsp;
                      <span className="optional">(không bắt buộc)</span>
                    </label>
                    <span className="woocommerce-input-wrapper">
                      <textarea
                        name="order_comments"
                        className="input-text "
                        id="order_comments"
                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                        rows="2"
                        cols="5"
                      ></textarea>
                    </span>
                  </p>
                </div>
              </div>
              <div className="cart-collaterals large-5 col-5 pb-0">
                <div className="cart-sidebar col-inner ">
                  <div className="cart_totals ">
                    <table cellspacing="0">
                      <thead>
                        <tr>
                          <th className="product-name" colspan="2">
                            ĐƠN HÀNG CỦA BẠN
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <table
                      style={{ width: "505px" }}
                      className="shop_table shop_table_responsive"
                    >
                      <tbody>
                        <tr className="cart-subtotal">
                          <th>SẢN PHẨM</th>
                        </tr>
                        <tr class="cart_item">
                          <td class="product-name">
                            {product.nameP}&nbsp;{" "}
                            <strong class="product-quantity">
                              {/* ×&nbsp;{this.props.item} */}
                              ×&nbsp;1
                            </strong>{" "}
                          </td>
                          <td
                            style={{ textAlign: "right" }}
                            data-title="Tạm tính"
                          >
                            <span className="woocommerce-Price-amount amount">
                              <bdi style={{ color: "red", textAlign: "right" }}>
                                {product.priceP}
                                <span className="woocommerce-Price-currencySymbol">
                                  ₫
                                </span>
                              </bdi>
                            </span>
                          </td>
                        </tr>
                        <tr className="cart-subtotal">
                          <th>Giao hàng</th>
                          <td
                            style={{ textAlign: "right" }}
                            data-title="Tạm tính"
                          >
                            <span className="woocommerce-Price-amount amount">
                              Phí ship:{" "}
                              <bdi style={{ color: "red" }}>
                                25000
                                <span className="woocommerce-Price-currencySymbol">
                                  ₫
                                </span>
                              </bdi>
                            </span>
                          </td>
                        </tr>
                        <tr className="cart-subtotal">
                          <th>Tổng</th>
                          <td
                            style={{ textAlign: "right" }}
                            data-title="Tạm tính"
                          >
                            <span className="woocommerce-Price-amount amount">
                              <bdi style={{ color: "red" }}>
                                {product.priceP + 25000}
                                <span className="woocommerce-Price-currencySymbol">
                                  ₫
                                </span>
                              </bdi>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="wc-proceed-to-checkout">
                      <a
                        style={{
                          color: "white",
                          fontSize: "18px",
                          fontWeight: "bold",
                          marginLeft: "35%",
                        }}
                        href="/purchase"
                      >
                        ĐẶT HÀNG
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Payment));

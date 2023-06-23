import React, { Component } from "react";
import { connect } from "react-redux";
import Flickity from "flickity";
import { useParams, useNavigate, withRouter } from "react-router-dom";
import "flickity/dist/flickity.min.css";
import { showProducts } from "../../../services/userService";
import Product from "../product/Product";
import "./Cart.scss";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: 1,
      product: [],
      cart: [],
    };
  }
  componentDidMount() {
    // console.log("check id test: ", this.props.match.params.id);
    // this.fetchProduct(this.props.match.params.id);
    this.crawCart();
  }
  // fetchProduct = async (id) => {
  //   try {
  //     const res = await showProducts(id);
  //     this.setState({ product: res.data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  crawCart = () => {
    const res = localStorage.hasOwnProperty("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    this.setState({ cart: res });
    // console.log("check cart: ", cart);
  };
  handleRemove = (e) => {
    const { cart } = this.state;
    const carts = cart.filter((item) => item.id !== e.id);
    localStorage.setItem("cart", JSON.stringify(carts));
    window.location.reload();
  };
  handleClickPlus = (index) => {
    const { cart } = this.state;
    let product = cart;
    product[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(product));
    window.location.reload();
  };
  handleClickMinus = (index) => {
    const { cart } = this.state;
    let product = cart;
    if (product[index].quantity > 1) {
      product[index].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(product));
      window.location.reload();
    }
  };
  handleUpdate = (inputId) => {
    const slug = `/cart/${inputId}`;
    window.location.href = slug;
  };
  handleBuy = (inputId) => {
    const slug = `/checkout/${inputId}`;
    window.location.href = slug;
  };

  render() {
    const { product, cart } = this.state;
    console.log("check cart: ", cart);
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
                  <i class="fa-solid fa-angle-right"></i>
                </span>
                <a href="/checkout" className="hide-for-small">
                  CHI TIẾT THANH TOÁN{" "}
                </a>
                <span className="divider hide-for-small">
                  <i class="fa-solid fa-angle-right"></i>
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
                className="col-8 large-7 pb-0 "
              >
                <form className="woocommerce-cart-form" method="post">
                  <div className="cart-wrapper sm-touch-scroll">
                    <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                      <thead>
                        <tr>
                          <th className="product-name" colspan="3">
                            Sản phẩm
                          </th>
                          <th className="product-price">Giá</th>
                          <th className="product-quantity">Số lượng</th>
                          <th className="product-subtotal">Tạm tính</th>
                        </tr>
                      </thead>
                      {/*  */}

                      <tbody>
                        {cart &&
                          cart.map((item, index) => {
                            return (
                              <tr className="product-list" key={index}>
                                <td className="product-remove">
                                  <a
                                    style={{ color: "red", fontSize: "18px" }}
                                    href=""
                                    className="remove"
                                    aria-label="Xóa sản phẩm này"
                                    data-product_id="6429"
                                    data-product_sku=""
                                  >
                                    <i
                                      class="fa-solid fa-xmark"
                                      onClick={() => this.handleRemove(item)}
                                    ></i>
                                  </a>{" "}
                                </td>
                                <td className="product-thumbnail">
                                  <img src={item.imageP} alt="" />
                                </td>
                                <td className="product-name">{item.nameP}</td>
                                <td className="product-price">
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi style={{ color: "red" }}>
                                      {item.priceP.toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                      })}
                                    </bdi>
                                  </span>
                                </td>
                                <td className=" product-quantity">
                                  {/*  */}
                                  <button
                                    className="minus col-4"
                                    onClick={() => this.handleClickMinus(index)}
                                  >
                                    -
                                  </button>
                                  <input
                                    className="col-4"
                                    min="1"
                                    value={item.quantity}
                                  />
                                  <button
                                    className="plus col-4"
                                    onClick={() => this.handleClickPlus(index)}
                                  >
                                    +
                                  </button>
                                </td>
                                <td className="product-subtotal">
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi style={{ color: "red" }}>
                                      {(
                                        item.quantity * item.priceP
                                      ).toLocaleString("it-IT", {
                                        style: "currency",
                                        currency: "VND",
                                      })}
                                    </bdi>
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                    <div className="row box-click">
                      <td className="row col-12">
                        <div className="col-6 continue-shopping pull-left text-left">
                          <a
                            style={{
                              color: "brown",
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                            className="button-continue-shopping button primary is-outline"
                            href="/shop"
                          >
                            ←&nbsp;Tiếp tục xem sản phẩm{" "}
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="col-6 button primary mt-0 pull-left small"
                          name="update_cart"
                          value="Cập nhật giỏ hàng"
                          disabled=""
                          aria-disabled="true"
                        >
                          <a
                            href=""
                            onClick={() =>
                              this.handleUpdate(this.props.match.params.id)
                            }
                            style={{
                              color: "black",
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Cập nhật giỏ hàng
                          </a>
                        </button>
                      </td>
                    </div>
                  </div>
                </form>
              </div>
              <div className="cart-collaterals large-5 col-4 pb-0">
                <div className="cart-sidebar col-inner ">
                  <div className="cart_totals ">
                    <table cellspacing="0">
                      <thead>
                        <tr>
                          <th class="product-name" colspan="2">
                            Cộng giỏ hàng
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <table
                      style={{ width: "505px" }}
                      className="shop_table shop_table_responsive"
                    >
                      <tbody>
                        {/* <tr class="cart-subtotal">
                          <th>Tạm tính</th>
                          <td
                            style={{ textAlign: "right" }}
                            data-title="Tạm tính"
                          >
                            <span class="woocommerce-Price-amount amount">
                              <bdi style={{ color: "red", textAlign: "right" }}>
                                {product.priceP}
                                <span class="woocommerce-Price-currencySymbol">
                                  ₫
                                </span>
                              </bdi>
                            </span>
                          </td>
                        </tr> */}
                        <tr class="cart-subtotal">
                          <th>Giao hàng</th>
                          <td
                            style={{ textAlign: "right" }}
                            data-title="Tạm tính"
                          >
                            <span class="woocommerce-Price-amount amount">
                              Phí ship:{" "}
                              <bdi style={{ color: "red" }}>
                                25000
                                <span class="woocommerce-Price-currencySymbol">
                                  ₫
                                </span>
                              </bdi>
                            </span>
                          </td>
                        </tr>
                        {/* <tr class="cart-subtotal">
                          <th>Tổng</th>
                          <td
                            style={{ textAlign: "right" }}
                            data-title="Tạm tính"
                          >
                            <span class="woocommerce-Price-amount amount">
                              <bdi style={{ color: "red" }}>
                                {product.priceP + 25000}
                                <span class="woocommerce-Price-currencySymbol">
                                  ₫
                                </span>
                              </bdi>
                            </span>
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                    <div class="wc-proceed-to-checkout">
                      <a
                        style={{
                          color: "white",
                          fontSize: "18px",
                          fontWeight: "bold",
                          marginLeft: "35%",
                        }}
                        href="/checkout"
                      >
                        Tiến hành thanh toán
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart));

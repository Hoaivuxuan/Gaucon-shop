import React, { Component } from "react";
import "./Product.scss";
// import Product from "../Product/Product";
import axios from "axios";
import showProducts from "../../../services/userService";
import { connect } from "react-redux";
import { addToCart } from "../../../store/actions/action";
import Payment from "../cart/Payment/Payment";
import { useParams, useNavigate, withRouter } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      product: [],
      productCart: [],
      item: props.item,
    };
  }

  componentDidMount() {
    // const { item } = this.props;
    this.fetchProduct(this.props.match.params.id);
    // console.log("check product test: ", this.props.match.params.id);
    this.fetchProductCart();
  }

  fetchProduct = async (id) => {
    try {
      const res = await showProducts(id);
      this.setState({ product: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  fetchProductCart = async () => {
    try {
      const { id } = this.props.match.params;
      const res = await showProducts(id);
      this.setState({ productCart: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  handleClickPlus = () => {
    const { value } = this.state;
    const quanity = 100;
    this.setState({ value: value < quanity ? value + 1 : quanity });
  };

  handleClickMinus = () => {
    const { value } = this.state;
    this.setState({ value: value > 0 ? value - 1 : 0 });
  };

  addToCart = (product) => {
    const { value } = this.state;
    var cart = localStorage.hasOwnProperty("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    var newCart = [];
    if (this.checkInCart(product, cart)) {
      cart.forEach((item, index) => {
        if (item.id === product.id) {
          newCart.push({
            ...item,
            quantity: item.quantity + value,
          });
        } else {
          newCart.push(item);
        }
      });
    } else {
      cart.push({
        ...product,
        quantity: value,
      });
      newCart = cart;
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.location.reload();
  };

  checkInCart = (product, cart) => {
    var i;
    for (i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        return true;
      }
    }
    return false;
  };

  handleBuy = (inputId) => {
    // const { value } = this.state;
    // console.log("check value: ", value);
    const slug = `/payment/${inputId}`;
    window.location.href = slug;
  };

  render() {
    const { value, productCart, product } = this.state;
    console.log("check value: ", value);
    // const test = this.state.value;
    // console.log("check test: ", test);
    if (!product) {
      return <div>Error!</div>;
    }
    return (
      <div className="custom-product-page">
        <div className="row row-collapse container">
          <div className="col small-12 large-12">
            <div className="col-inner text-left">
              <div className="product-breadcrumb-container is-xlarge">
                <nav className="woocommerce-breadcrumb breadcrumbs uppercase">
                  <a href="/">Trang chủ</a> <span className="divider">/</span>{" "}
                  <a>{product.nameP}</a>{" "}
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="row body container">
          <div className="col-5 medium-5 small-12 large-5">
            <img src={product.imageP} />
          </div>
          {/*  */}
          <div className="col-7 medium-7 small-12 large-7">
            <div className="row container">
              <div className="col-inner">
                <div className="product-title-container">
                  <h1 className="product-title product_title entry-title">
                    {product.nameP}
                  </h1>
                </div>
                <div className="product-price-container is-normal">
                  <del aria-hidden="true">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        400.000
                        <span className="woocommerce-Price-currencySymbol">
                          ₫
                        </span>
                      </bdi>
                    </span>
                  </del>{" "}
                  <ins style={{ margin: "auto" }}>
                    {" "}
                    <span className="woocommerce-Price-amount amount">
                      {" "}
                      <bdi style={{ color: "red" }}>
                        {product.priceP}
                        <span className="woocommerce-Price-currencySymbol">
                          ₫
                        </span>
                      </bdi>
                    </span>
                  </ins>
                </div>
                <div className="product_meta">
                  <span className="available_wrapper">
                    Tình trạng:{" "}
                    <span className="result-m">
                      <span style={{ color: "green" }} className="available-m">
                        {product.countP} sản phẩm có sẵn
                      </span>
                    </span>
                  </span>
                  <br></br>
                  <span className="sku_wrapper">
                    Mã: <span className="sku">N/A</span>
                  </span>
                  <br></br>
                  <span className="posted_in">
                    Danh mục:{" "}
                    <a href="#" style={{ color: "brown" }}>
                      {product.categoryP}
                    </a>
                  </span>
                </div>
                <div className="add-to-cart-container form-normal is-normal row">
                  <div className="col-2 quantity buttons_added form-normal">
                    {/*  */}
                    <button
                      className="minus"
                      onClick={() => this.handleClickMinus()}
                    >
                      -
                    </button>
                    <input
                      style={{width: "100%"}}
                      type="number"
                      min="1"
                      // onChange={(e) => setValue(e.target.value)}
                      value={value}
                    />
                    <button
                      className="plus"
                      onClick={() => this.handleClickPlus()}
                    >
                      +
                    </button>
                  </div>
                  {/*  */}
                  <button
                    // onClick={this.handleAdd}
                    onClick={() => this.addToCart(product)}
                    type="submit"
                    className="col-4 single_add_to_cart_button button alt disabled wc-variation-selection-needed"
                  >
                    Thêm vào giỏ hàng
                  </button>
                  {/*  */}
                  <button
                    // onClick={this.handleBuy}
                    onClick={() => this.handleBuy(product.id)}
                    type="button"
                    className="col-7 button buy_now_button"
                  >
                    <div style={{ display: "none" }}>
                      <Payment item={value} />
                    </div>
                    <strong>Mua ngay</strong>
                    <br></br>
                    <span>Gọi điện xác nhận và giao hàng tận nơi</span>
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
          {/*  */}
          <div className="row infoproduct">
            <div className="col-12 small-12 large-12">
              <div className="col-inner">
                <h2>Chi tiết sản phẩm</h2>
                {product.nameP}
                <div
                  style={{ whiteSpace: "pre-line" }}
                  className="product-short-description"
                >
                  {product.infoP}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Product));

import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
import Carousel from "react-bootstrap/Carousel";
import { showProducts } from "../../../services/userService";
import "./Home.scss";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }
  fetchDataProduct = async (product) => {
    const res = await showProducts(product);
    console.log("check res", res);
    this.setState({ product: res.data });
  };
  componentDidMount() {
    this.fetchDataProduct();
  }
  render() {
    // const { isLoggedIn } = this.props;
    const { product } = this.state;
    console.log("check product: ", product);
    // let linkToRedirect = isLoggedIn ? "/" : "/login";

    return (
      // <Redirect to={linkToRedirect} />
      <div className="home">
        <div
          className="slider-container carousel"
          data-flickity='{
            "cellAlign": "center",
            "imagesLoaded": true,
            "lazyLoad": 1,
            "freeScroll": false,
            "wrapAround": true,
            "autoPlay": 3000,
            "pauseAutoPlayOnHover" : false,
            "prevNextButtons": true,
            "contain" : true,
            "adaptiveHeight" : true,
            "dragThreshold" : 10,
            "percentPosition": true,
            "pageDots": true,
            "rightToLeft": false,
            "draggable": true,
            "selectedAttraction": 0.1,
            "parallax" : 0,
            "friction": 0.6 }'
        >
          <div className="carousel-cell">
            <img src="http://127.0.0.1:5501/src/assets/banner-shopgau.png" />
          </div>
          <div className="carousel-cell">
            <img src="http://127.0.0.1:5501/src/assets/banner2.png" />
          </div>
        </div>
        {/*  */}
        <div className="row flash-sale">
          <div className="col medium-6 small-12 large-6">
            <div className="col-inner">
              <a href="#">
                <img src="http://127.0.0.1:5501/src/assets/Fashion.png"></img>
              </a>
            </div>
          </div>
          <div className="col medium-6 small-12 large-6">
            <div className="col-inner">
              <a href="#">
                <img src="http://127.0.0.1:5501/src/assets/Fashion1.png"></img>
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="section-content relative">
          <div className="container section-title-container">
            <h1 className="section-title section-title-center">
              <b></b>
              <span className="section-title-main">Áo</span>
              <b></b>
            </h1>
          </div>
          {/*  */}
          <div
            className="slider-container carousel row"
            data-flickity='{
              "imagesLoaded": true, 
              "groupCells": "100%", 
              "dragThreshold" : 5, 
              "cellAlign": "left",
              "wrapAround": true,
              "prevNextButtons": true,
              "percentPosition": true,
              "pageDots": false, 
              "rightToLeft": false, 
              "autoPlay" : 2000 }'
          >
            {product &&
              product.map((item) => {
                const aoProducts = [];
                //
                if (item.idGroup.toString().startsWith("1")) {
                  aoProducts.push(item.imageP);
                  aoProducts.push(item.nameP);
                  aoProducts.push(item.priceP + "đ");
                }
                return (
                  <div className="col-3 carousel-cell" key={item.id}>
                    <div className="box-image">
                      <a href="/">
                        <img src={aoProducts[0]} alt="" />
                      </a>
                    </div>
                    <div className="box-text box-text-products text-center grid-style-2">
                      <div className="title-wrapper">
                        {" "}
                        <p className="name product-title woocommerce-loop-product__title">
                          <a
                            href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            {aoProducts[1]}
                          </a>
                        </p>
                      </div>
                      <div className="price-wrapper">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>{aoProducts[2]}</bdi>
                          </span>
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                );
              })}
          </div>
          {/*  */}
          <div className="container section-title-container">
            <h1 className="section-title section-title-center">
              <b></b>
              <span className="section-title-main">Quần</span>
              <b></b>
            </h1>
          </div>
          {/*  */}
          <div
            className="slider-container carousel row"
            data-flickity='{
              "imagesLoaded": true, 
              "groupCells": "100%", 
              "dragThreshold" : 5, 
              "cellAlign": "left",
              "wrapAround": true,
              "prevNextButtons": true,
              "percentPosition": true,
              "pageDots": false, 
              "rightToLeft": false, 
              "autoPlay" : 2000 }'
          >
            {product &&
              product.map((item) => {
                const quanProducts = [];
                //
                if (item.idGroup.toString().startsWith("2")) {
                  quanProducts.push(item.imageP);
                  quanProducts.push(item.nameP);
                  quanProducts.push(item.priceP + "đ");
                }
                return (
                  <div className="col-3 carousel-cell" key={item.id}>
                    <div className="box-image">
                      <a href="/">
                        <img src={quanProducts[0]} alt="" />
                      </a>
                    </div>
                    <div className="box-text box-text-products text-center grid-style-2">
                      <div className="title-wrapper">
                        {" "}
                        <p className="name product-title woocommerce-loop-product__title">
                          <a
                            href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            {quanProducts[1]}
                          </a>
                        </p>
                      </div>
                      <div className="price-wrapper">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>{quanProducts[2]}</bdi>
                          </span>
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                );
              })}
          </div>
          {/*  */}
          <div className="container section-title-container">
            <h1 className="section-title section-title-center">
              <b></b>
              <span className="section-title-main">Phụ Kiện</span>
              <b></b>
            </h1>
          </div>
          {/*  */}
          <div
            className="slider-container carousel row"
            data-flickity='{
              "imagesLoaded": true, 
              "groupCells": "100%", 
              "dragThreshold" : 5, 
              "cellAlign": "left",
              "wrapAround": true,
              "prevNextButtons": true,
              "percentPosition": true,
              "pageDots": false, 
              "rightToLeft": false, 
              "autoPlay" : 2000 }'
          >
            {product &&
              product.map((item) => {
                const phukienProducts = [];
                //
                if (item.idGroup.toString().startsWith("3")) {
                  phukienProducts.push(item.imageP);
                  phukienProducts.push(item.nameP);
                  phukienProducts.push(item.priceP + "đ");
                }
                return (
                  <div className="col-3 carousel-cell" key={item.id}>
                    <div className="box-image">
                      <a href="/">
                        <img src={phukienProducts[0]} alt="" />
                      </a>
                    </div>
                    <div className="box-text box-text-products text-center grid-style-2">
                      <div className="title-wrapper">
                        {" "}
                        <p className="name product-title woocommerce-loop-product__title">
                          <a
                            href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                            className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                          >
                            {phukienProducts[1]}
                          </a>
                        </p>
                      </div>
                      <div className="price-wrapper">
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>{phukienProducts[2]}</bdi>
                          </span>
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                );
              })}
          </div>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

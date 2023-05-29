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
            <div className="col-8 flex-grow medium-text-center">
              <div className="is-large">
                <nav className="woocommerce-breadcrumb breadcrumbs uppercase">
                  <a href="/">Trang chủ</a> <span className="divider">/</span> Shop
                </nav>
              </div>
            </div>
            <div className="col medium-text-center row">
              <p className="col woocommerce-result-count hide-for-medium">
                Hiển thị 1-12 của 24
              </p>
              <form className="col woocommerce-ordering" method="get">
                <select
                  name="orderby"
                  className="orderby"
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
          <div className="row category-page-row container">
            <div
              className="col-3 hide-for-medium"
              style={{ padding: "0 15px" }}
            >
              <div className="danhmucsp">
                <h4>Danh mục sản phẩm</h4>
                <ul className="woof_list woof_list_checkbox">
                  <li className="">
                    <i style={{ color: "brown" }} className="fa-solid fa-star"></i>{" "}
                    <a href="/" className="">
                      Áo
                    </a>
                  </li>
                  <li className="">
                    <i style={{ color: "brown" }} className="fa-solid fa-star"></i>{" "}
                    <a href="/" className="">
                      Quần
                    </a>
                  </li>
                  <li className="">
                    <i style={{ color: "brown" }} className="fa-solid fa-star"></i>{" "}
                    <a href="/" className="">
                      Phụ Kiện
                    </a>
                  </li>
                </ul>
              </div>
              <div className="size">
                <h4>Size</h4>
                <ul className="woof_list woof_list_checkbox">
                  <li className="">
                    <i style={{ color: "brown" }} className="fa-solid fa-star"></i>{" "}
                    <a href="/" className="">
                      S
                    </a>
                  </li>
                  <li className="">
                    <i style={{ color: "brown" }} className="fa-solid fa-star"></i>{" "}
                    <a href="/" className="">
                      M
                    </a>
                  </li>
                  <li className="">
                    <i style={{ color: "brown" }} className="fa-solid fa-star"></i>{" "}
                    <a href="/" className="">
                      L
                    </a>
                  </li>
                  <li className="">
                    <i style={{ color: "brown" }} className="fa-solid fa-star"></i>{" "}
                    <a href="/" className="">
                      XL
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9 sanpham">
              <div className="shop-container">
                <div className="products row row-small large-columns-4 medium-columns-3 small-columns-2">
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/quan.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/quan.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/quan.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/quan.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/mu.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/mu.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/mu.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-small col-3 has-hover product type-product post-7585 status-publish first instock product_cat-hoodie-sweater product_cat-top has-post-thumbnail taxable shipping-taxable purchasable product-type-variable">
                    <div className="col-inner">
                      <div className="badge-container absolute left top z-1"></div>
                      <div className="product-small box ">
                        <div className="box-image">
                          <div className="image-fade_in_back">
                            <a href="/">
                              <img src="http://127.0.0.1:5501/src/assets/mu.jpg" />
                            </a>
                          </div>
                          <div className="image-tools is-small top right show-on-hover"></div>
                          <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                          <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                        </div>

                        <div className="box-text box-text-products text-center grid-style-2">
                          <div className="title-wrapper">
                            {" "}
                            <p className="name product-title woocommerce-loop-product__title">
                              <a
                                href="https://newseven.vn/product/ao-hoodie-boxy-hi"
                                className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                              >
                                Boxy H&I
                              </a>
                            </p>
                          </div>
                          <div className="price-wrapper">
                            <span className="price">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  450.000
                                  <span className="woocommerce-Price-currencySymbol">
                                    ₫
                                  </span>
                                </bdi>
                              </span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <nav className="woocommerce-pagination">
                    <ul className="page-numbers nav-pagination links text-center">
                      <li>
                        <a
                          href="http://localhost:3000/shop"
                          aria-current="page"
                          className="page-number current"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          className="page-number"
                          href="http://localhost:3000/shop/page/2"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          className="page-number"
                          href="http://localhost:3000/shop/page/3"
                        >
                          3
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
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

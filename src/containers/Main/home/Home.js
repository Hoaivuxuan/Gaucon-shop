import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./Home.scss";
class Home extends Component {
  render() {
    const { isLoggedIn } = this.props;
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
          <div class="carousel-cell">
            <img src="http://127.0.0.1:5500/src/assets/banner-shopgau.png" />
          </div>
          <div class="carousel-cell">
            <img src="http://127.0.0.1:5500/src/assets/banner2.png" />
          </div>
        </div>
        {/*  */}
        <div className="row flash-sale">
          <div className="col medium-6 small-12 large-6">
            <div className="col-inner">
              <a href="#">
                <img src="http://127.0.0.1:5500/src/assets/Fashion.png"></img>
              </a>
            </div>
          </div>
          <div className="col medium-6 small-12 large-6">
            <div className="col-inner">
              <a href="#">
                <img src="http://127.0.0.1:5500/src/assets/Fashion1.png"></img>
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="section-content relative">
          <div class="container section-title-container">
            <h1 class="section-title section-title-center">
              <b></b>
              <span class="section-title-main">Áo</span>
              <b></b>
            </h1>
          </div>
          {/*  */}
          <div
            className="slider-container carousel"
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
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
          </div>
          {/*  */}
          <div class="container section-title-container">
            <h1 class="section-title section-title-center">
              <b></b>
              <span class="section-title-main">Quần</span>
              <b></b>
            </h1>
          </div>
          {/*  */}
          <div
            className="slider-container carousel"
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
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
          </div>
          {/*  */}
          <div class="container section-title-container">
            <h1 class="section-title section-title-center">
              <b></b>
              <span class="section-title-main">Phụ Kiện</span>
              <b></b>
            </h1>
          </div>
          {/*  */}
          <div
            className="slider-container carousel"
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
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
            <div class="carousel-cell">
              <div className="box-image">
                <a href="/">
                  <img src="http://127.0.0.1:5500/src/assets/products/ao/%C3%81o%20Thun%20Studio%20Essential.jpg" />
                </a>
              </div>
              <div className="box-text text-center is-small"></div>
            </div>
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

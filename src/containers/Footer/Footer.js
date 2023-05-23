import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import * as actions from "../../store/actions";
// import Navigator from '../../components/Navigator';
// import { adminMenu } from './menuApp';
import "./Footer.scss";

class Footer extends Component {
  render() {
    // const { processLogout } = this.props;

    return (
      <div bgColor="light" className="text-center text-lg-start text-muted">
        {/*  */}
        <section className="">
          <div className="text-center text-md-start mt-5">
            <div className="mt-3 row">
              <div md="3" lg="4" xl="3" className="col mx-auto mb-4 col-3">
                <h6 className="text-uppercase fw-bold mb-4">
                  <div color="secondary" icon="gem" className="me-3" />
                  Giới thiệu
                </h6>
                <p>
                  GauShop hướng đến sứ mệnh trở thành một local brand với các
                  sản phẩm chất lượng tốt và giá thành "dễ chịu" với mọi người.
                </p>
              </div>

              <div md="2" lg="2" xl="2" className="col mx-auto mb-4 col-3">
                <h6 className="text-uppercase fw-bold mb-4">Sản Phẩm</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Áo
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Quần
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Phụ Kiện
                  </a>
                </p>
              </div>

              <div
                md="4"
                lg="3"
                xl="3"
                className="col mx-auto mb-md-0 mb-4 col-4"
              >
                <h6 className="text-uppercase fw-bold mb-4">
                  Thông tin liên hệ
                </h6>
                <p>
                  <div color="secondary" icon="home" className="me-2" />
                  S202 SmartCity, Tây Mỗ, Nam Từ Liêm, Hà Nội
                </p>
                <p>
                  <div color="secondary" icon="envelope" className="me-3" />
                  gaushop@gmail.com
                </p>
                <p>
                  <div color="secondary" icon="phone" className="me-3" />{" "}
                  0363656128
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2023 Design by:
          <a className="text-reset fw-bold" href="/">
            ShopGau.com
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

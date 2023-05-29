import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import _ from "lodash";
//
import "./Address.scss";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", phonenumber: "", address: "" };
  }

  componentDidMount() {
    console.log("DidMount edit modal", this.props.currentAddress);
    let account = this.props.currentAddress;
    if (account && !_.isEmpty(account)) {
      this.setState({
        id: account.id,
        name: account.name,
        phonenumber: account.phonenumber,
        address: account.address,
      });
    }
  }

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnChangeInput = (event, id) => {
    console.log(event.target.value, id);
    this.setState({ [id]: event.target.value });
  };

  handleSaveInfo = () => {
    this.props.editAddress(this.state);
  };

  render() {
    // console.log("check props", this.props);
    // console.log("check child open modal", this.props.isOpen);
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        size="lg"
        // centered="true"
      >
        <div
          className="modalheader"
          toggle={() => {
            this.toggle();
          }}
        >
          Sửa thông tin địa chỉ
        </div>
        <div className="modalbody">
          <div className="form-group">
            <label>Họ tên</label>
            <input
              className="form-control"
              type="text"
              value={this.state.name}
              onChange={(event) => {
                this.handleOnChangeInput(event, "name");
              }}
            />
          </div>
          {/*  */}
          <div className="form-group">
            <label>Số điện thoại</label>
            <input
              className="form-control"
              type="phonenumber"
              value={this.state.phonenumber}
              onChange={(event) => {
                this.handleOnChangeInput(event, "phonenumber");
              }}
            />
          </div>
          {/*  */}
          <div className="form-group">
            <label>Địa chỉ</label>
            <input
              className="form-control"
              type="text"
              value={this.state.address}
              onChange={(event) => {
                this.handleOnChangeInput(event, "address");
              }}
            />
          </div>
        </div>
        <div className="modalfooter row">
          <Button
            className="col-6"
            onClick={() => {
              this.handleSaveInfo();
            }}
          >
            LƯU
          </Button>{" "}
          <Button
            className="col-6"
            onClick={() => {
              this.toggle();
            }}
          >
            HỦY
          </Button>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);

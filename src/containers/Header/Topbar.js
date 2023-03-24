import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import * as actions from "../../store/actions";
// import Navigator from '../../components/Navigator';
// import { adminMenu } from './menuApp';

import './Topbar.scss';

class Topbar extends Component {

    render() {
        // const { processLogout } = this.props;

        return (
            <div id='topbar' className="clearfix hidden-xs tp_header">
                <div className='container-fluid clearfix topbar-top row'>
                    <div className='no-padding col-sm-10 top_bar_left'>
                        <div className='innerTopLeft'>
                            <FontAwesomeIcon className='phone' icon={faPhoneVolume} />
                            <span className='title-info-top'>
                                <b>0363656128</b>
                            </span>
                        </div>
                    </div>
                    <div className='no-padding col-sm-2 top_bar_right'>
                        <div className='innerTopRight'>
                            <ul className='row'>
                                <div className='cart_header_top col-sm-6'>
                                    <span id='site-cart-handle' className='icon-cart'>
                                        <a href='#' className='count-holder'>
                                            <FontAwesomeIcon className='cart' icon={faCartShopping} />
                                            <span className='title-info-top'>
                                                Giỏ hàng
                                            </span>
                                        </a>
                                    </span>
                                </div>
                                <div className='person_header_top col-sm-6'>
                                    <a href='#'>
                                        <FontAwesomeIcon className='person' icon={faUser} />
                                        <span className='title-info-top'>
                                            Tài khoản
                                        </span>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);

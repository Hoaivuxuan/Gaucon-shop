import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

class Header extends Component {

    render() {
        // const { processLogout } = this.props;

        return (
            <div className='header-wrapper'>
                <div className='header-inner flex-row padding-left-right logo-left medium-logo-center'>
                    <div id="logo" class="flex-col logo">
                        <a href='/'>
                            <img src='./gau-logo.png'/>
                        </a>
                    </div>
                    
                    <div className='flex-col hide-for-medium flex-left flex-grow'>
                        <ul className='header-nav header-nav-main nav nav-left  nav-line-grow nav-size-large nav-spacing-medium nav-uppercase'>
                            <li id="menu-item-627" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-97 current_page_item menu-item-627 active menu-item-design-default"><a href="/" aria-current="page" class="nav-top-link">HOME</a></li>
                            <li id="menu-item-628" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-628 menu-item-design-default has-dropdown"><a href="/" class="nav-top-link">SHOP<i class="icon-angle-down"></i></a>
                                {/* <ul class="sub-menu nav-dropdown nav-dropdown-default">
                                    <li id="menu-item-1780" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-1780 nav-dropdown-col"><a href="https://newseven.vn/product-category/top">TOP</a>
                                    <ul class="sub-menu nav-column nav-dropdown-default">
                                        <li id="menu-item-1784" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1784"><a href="https://newseven.vn/product-category/top/tshirt">Tshirt</a></li>
                                        <li id="menu-item-1783" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1783"><a href="https://newseven.vn/product-category/top/shirt-polo">Shirt &amp; Polo</a></li>
                                        <li id="menu-item-1781" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1781"><a href="https://newseven.vn/product-category/top/hoodie-sweater">Hoodie &amp; Sweater</a></li>
                                        <li id="menu-item-1782" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1782"><a href="https://newseven.vn/product-category/top/outerwear">Outerwear</a></li>
                                    </ul>
                                </li>
                                    <li id="menu-item-1777" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-1777 nav-dropdown-col"><a href="https://newseven.vn/product-category/bottom">BOTTOM</a>
                                    <ul class="sub-menu nav-column nav-dropdown-default">
                                        <li id="menu-item-1779" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1779"><a href="https://newseven.vn/product-category/bottom/short">Short</a></li>
                                        <li id="menu-item-1778" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1778"><a href="https://newseven.vn/product-category/bottom/pant">Pant</a></li>
                                    </ul>
                                </li>
                                    <li id="menu-item-1774" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-1774 nav-dropdown-col"><a href="https://newseven.vn/product-category/acessories">ACESSORIES</a>
                                    <ul class="sub-menu nav-column nav-dropdown-default">
                                        <li id="menu-item-1776" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1776"><a href="https://newseven.vn/product-category/acessories/caps-hats">Caps/Hats</a></li>
                                        <li id="menu-item-1775" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1775"><a href="https://newseven.vn/product-category/acessories/bag">Bag</a></li>
                                    </ul>
                                </li>
                                </ul> */}
                            </li>
                            <li id="menu-item-626" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-626 menu-item-design-default"><a href="/" class="nav-top-link">CONTACT</a></li>
                            <li id="menu-item-1241" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1241 menu-item-design-default"><a href="/" class="nav-top-link">GROUP</a></li>
                            
                        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

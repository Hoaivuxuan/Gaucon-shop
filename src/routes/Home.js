import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import './Home.scss'
class Home extends Component {

    render() {
        const { isLoggedIn } = this.props;
        let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';

        return (
            // <Redirect to={linkToRedirect} />
            <div className='home'>   
                {/* <div class="carousel" data-flickity='{"fullscreen": true, "groupCells": 1, "autoPlay": true, "pauseAutoPlayOnHover": false }'>
                    <div class="carousel-cell">
                        <img src="https://i.pinimg.com/564x/4a/e5/d3/4ae5d3074757a801a194a46b84f095cb.jpg"/>
                    </div>
                    <div class="carousel-cell">
                        <img src="https://i.pinimg.com/564x/3c/a0/5b/3ca05b4c99d088dcdc15a1a636495b9c.jpg"/>
                    </div>
                </div> */}
                <img src="https://i.pinimg.com/564x/3c/a0/5b/3ca05b4c99d088dcdc15a1a636495b9c.jpg"/>
                <img src="https://i.pinimg.com/564x/3c/a0/5b/3ca05b4c99d088dcdc15a1a636495b9c.jpg"/>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

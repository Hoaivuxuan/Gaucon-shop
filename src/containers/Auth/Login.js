import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
// import { Button } from 'reactstrap';
//
import { handleLoginApi } from '../../services/userService';
import * as actions from "../../store/actions";
import './Login.scss';
// import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            iShowPassword: false,
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        console.log('username: ' + this.state.username + 'password: ' + this.state.password)
        console.log('all state', this.state)
        await handleLoginApi(this.state.username, this.state.password)
    }

    handleShowHidePassword = () => {
        this.setState({
            iShowPassword: !this.state.iShowPassword
        })
    }

    render() {
        //JSX
        return (
            <div className='login-background'>
                <div className='container'>
                    <div className='login-content row'>
                        <div className='left-col'>
                            <div className='col-12 login-text'>Login</div>
                            <div className='col-12 username'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Username'
                                    value={this.state.username}
                                    onChange={(event) => this.handleOnChangeUsername(event)}
                                ></input>
                            </div>
                            <div className='col-12 password'>
                                <div className='custom-input-password'>
                                    <input
                                        type={this.state.iShowPassword ? 'text' : 'password'}
                                        className='form-control'
                                        placeholder='Password'
                                        value={this.state.password}
                                        onChange={(event) => this.handleOnChangePassword(event)}
                                    ></input>
                                    <span
                                        onClick={() => { this.handleShowHidePassword() }}
                                    ><FontAwesomeIcon className='eye' icon={this.state.iShowPassword ? faEye : faEyeSlash} /></span>
                                </div>
                            </div>
                            <div className='col-12'>
                                <button className="col-12 btn-login btn-login-form" onClick={() => { this.handleLogin() }} type="submit" value="login">Login</button>
                            </div>
                            <div className='col-12 forgot-text'>
                                <a className='f-text' href='/'>Forgot password</a>
                            </div>
                            <div className='col-12 note-text'>
                                <span className='or-text'>Or login with</span>
                            </div>
                            <div className='block social-login'>
                                <div className='d-flex justify-content-center page-signup-social-wrapper'>
                                    <div className='login-google'>
                                        <FontAwesomeIcon className='google' icon={faGoogle} />
                                    </div>
                                    <div className='login-facebook'>
                                        <FontAwesomeIcon className='facebook' icon={faFacebook} />
                                    </div>
                                </div>
                            </div>
                            <div className='register'>
                                Don't have an account yet?
                                <a className='create-acc' href='/'> Create one here!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

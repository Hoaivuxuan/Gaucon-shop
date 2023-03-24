import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
//
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import { CustomToastCloseButton } from '../components/CustomToast';

//
import Home from '../routes/Home';
import Login from './Auth/Login';
import Topbar from './Header/Topbar';
import Header from './Header/Header';
import System from '../routes/System';
import ConfirmModal from '../components/ConfirmModal';
import Footer from './Footer/Footer';
import './App.scss'
import CustomScrollbars from '../components/CustomScrollbars';
class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                <CustomScrollbars style={{height: '100vh', width: '100%'}}>
                    <header id='header' className='test header has-sticky sticky-jump'>
                        {/* <Route component={userIsNotAuthenticated(Topbar)} /> */}
                        <Route component={userIsNotAuthenticated(Header)} />
                    </header>
                    {/*  */}
                    <main className="main-container">
                        <ConfirmModal />
                        {this.props.isLoggedIn && <Header />}

                        <span className="content-container">

                            <Switch>
                                <Route path={path.HOME} exact component={(Home)} />
                                <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                
                            </Switch>

                        </span>

                        <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        />
                    </main>
                    {/*  */}
                    <footer id='footer' className='footer-wrapper'>
                        <Route component={userIsNotAuthenticated(Footer)} />
                    </footer>
                </CustomScrollbars>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
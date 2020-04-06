import React, { Component } from 'react';

class LoginStatus extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: false };
    }
    handleLogin = () => {
        this.setState({isLogin: true});
    }
    handleLogout = () => {
       this.setState({isLogin: false});
    }
    render() {
        let myButton = null;
        if (this.state.isLogin) {
           myButton = <button className="content-right" onClick={this.handleLogout.bind(this)}>Logout</button>
        }
        else {
            myButton = <button onClick={this.handleLogin.bind(this)}>Login</button>

        }
        return myButton;
    }
}

export default LoginStatus;
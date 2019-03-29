import React, { Component } from 'react';
import logoimg from '../../assets/images/nav-logo.png';

class LoginHeader extends Component {
    render() {
        return (
            <header>
                <div>
                    <img src={ logoimg } alt="logo" />
                </div>
            </header>
        )
    }
}

export default LoginHeader;
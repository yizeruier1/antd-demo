import React, { Component } from 'react';
import LoginHeader from '@/components/login/LoginHeader.jsx'
import LoginFooter from '@/components/login/LoginFooter.jsx'
import LoginForm from '@/components/login/LoginForm.jsx'
import RegiForm from '@/components/login/RegiForm.jsx'
import './index.css'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 1
        }
    }
    change(res){
        this.setState({
            index: res
        })
    }
    render(){
        return(
            <div className="login-warp">
                <LoginHeader />

                <div className="login-box">
                    <h3>{ this.state.index === 1 ? '登录' : '注册' }</h3>
                    { this.state.index === 1 ? <LoginForm setChange={ res => this.change(res) } /> : <RegiForm setChange={ res => this.change(res) } /> }
                </div>

                <LoginFooter />
            </div>
        )
    }
}

export default Login;
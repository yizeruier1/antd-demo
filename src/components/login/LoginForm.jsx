import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';

class LoginForm1 extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    state = {
        loading: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                this.setState({ loading: true })
                setTimeout(() => {
                    this.context.router.history.push("/home");
                }, 1500)
            }
        });
    }

    handleChange = e => {
        console.log('the password is: ' + e.target.value)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <div className="loginformbox">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {
                            getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!'}],
                            })(
                                <Input prefix = {
                                    <Icon type="user" style = {{ color: 'rgba(0,0,0,.25)' }} />
                                } placeholder="Username" size="large" />
                            )
                        }
                    </Form.Item>

                    <Form.Item>
                        {
                            getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={
                                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                } type="password" placeholder="Password" size="large" onChange={ e => this.handleChange(e) } />
                            )
                        }
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" size="large" loading={this.state.loading} style={{ width: '100%' }}>
                            Log in
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={() => this.props.setChange(2)}>
                            去注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const LoginForm = Form.create({ name: 'normal_login' })(LoginForm1);
export default LoginForm;
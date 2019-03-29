import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import PropTypes from 'prop-types';

class RegiForm1 extends Component {

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
                this.setState({
                    loading: true
                })
                setTimeout(() => {
                    message.success('注册成功!')
                    this.props.setChange(1)
                }, 1500)
            }
        });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码输入不一致!');
        } else {
            callback();
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginformbox">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {
                            getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!'}],
                            })(
                                <Input prefix = {
                                    <Icon type="user" style = {{ color: 'rgba(0,0,0,.25)' }} />
                                } placeholder="用户名" />
                            )
                        }
                    </Form.Item>

                    <Form.Item>
                        {
                            getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={
                                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                } type="password" placeholder="密码" />
                            )
                        }
                    </Form.Item>

                    <Form.Item>
                        {
                            getFieldDecorator('confirm', {
                                rules: [{
                                required: true, message: '请再次输入密码!',
                                }, {
                                validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input prefix={
                                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                } type="password" placeholder="再次输入密码" />
                            )
                        }
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading} style={{ width: '100%' }}>
                            Submit
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={() => this.props.setChange(1)}>
                            去登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}


const RegiForm = Form.create({ name: 'normal_login' })(RegiForm1);
export default RegiForm;
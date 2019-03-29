import React, { Component } from 'react';
import { Row, Col, Menu, Dropdown, Icon } from 'antd';


class HomeHeader extends Component {

    
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    eBay
                </Menu.Item>
                <Menu.Item key="1">
                    aliExpress
                </Menu.Item>
            </Menu>
        );

        const rowStyle = {
            textAlign: 'center',
            cursor: 'pointer'
        }

        const phoneStyle = {
            textAlign: 'right'
        }

        return (
            <div className="homeheader">
                <div>
                    <Row>
                        <Col span={16}>
                            您好，欢迎来到 红叶数据
                        </Col>
                        <Col span={2}>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <div>
                                    Click me <Icon type="down" />
                                </div>
                            </Dropdown>
                        </Col>
                        <Col span={3}>
                            <Row style={ rowStyle }>
                                <Col span={12}>
                                    立即登录
                                </Col>
                                <Col span={12}>
                                    免费注册
                                </Col>
                            </Row>
                        </Col>
                        <Col span={3} style={phoneStyle}>
                            010-56012313
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default HomeHeader;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Menu, Dropdown, Icon } from 'antd';
import { mapStateToProps, mapDispatchToProps } from '@/redux/map.js';


class HomeHeader extends Component {
    //  设置平台
    setPlat = plat => {
        if (plat.key === this.props.platform){
            return false
        }
        const { setEbay, setAli } = this.props
        window.localStorage.setItem('platform', plat.key)
        if (plat.key === 'eBay'){
            if(window.location.href.indexOf('/eBay/') === -1){
                this.props.history.push("/home/eBay/eBayhot")
            }
            setEbay()
        }else{
            if (window.location.href.indexOf('/aliExpress/') === -1) {
                this.props.history.push("/home/aliExpress/alihot")
            }
            setAli()
        }
    }
    render() {
        const menu = (
            <Menu onClick={this.setPlat}>
                <Menu.Item key="eBay">
                    eBay
                </Menu.Item>
                <Menu.Item key="aliExpress">
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
                                <div style={{ cursor: 'pointer' }}>
                                    {this.props.platform} <Icon type="down" />
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

export default HomeHeader = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
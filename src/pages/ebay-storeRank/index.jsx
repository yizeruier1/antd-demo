import React, { Component } from 'react';
import eBayImg from '@/assets/images/ebay.png';
import StoreRankCategory from '@/components/common/StoreRankCategory';
import { Row, Col, Table } from 'antd';
import './index.css'

// 表格信息
const columns = [
    {
        title: '排名',
        dataIndex: 'rank',
        align: 'center',
        width: '70px'
    }, {
        title: '店铺名称',
        dataIndex: 'storeName',
        align: 'center',
        width: '200px'
    }, {
        title: '产品数量',
        dataIndex: 'amount',
        align: 'center'
    }, {
        title: '近7日销售量',
        dataIndex: 'amount7',
        align: 'center'
    }, {
        title: '近7日销售额',
        dataIndex: 'total7',
        align: 'center'
    }, {
        title: '销售均价',
        dataIndex: 'price',
        align: 'center'
    }, {
        title: '开店时间',
        dataIndex: 'time',
        align: 'center'
    }, {
        title: '主营站点',
        dataIndex: 'site',
        align: 'center'
    }, {
        title: '好评率',
        dataIndex: 'haoping',
        align: 'center'
    }, {
        title: '买家注册点',
        dataIndex: 'address',
        align: 'center'
    }
];


class EbaySroreRank extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    rank: '1',
                    storeName: 'mjd128',
                    amount: '201977',
                    amount7: '41万',
                    total7: '5949万',
                    price: '559.03',
                    time: '3个月',
                    site: 'Austrilia',
                    haoping: '99.5%',
                    address: 'UK'
                }, {
                    rank: '2',
                    storeName: 'mjd128',
                    amount: '201977',
                    amount7: '41万',
                    total7: '5949万',
                    price: '559.03',
                    time: '3个月',
                    site: 'Austrilia',
                    haoping: '99.5%',
                    address: 'UK'
                }, {
                    rank: '3',
                    storeName: 'mjd128',
                    amount: '201977',
                    amount7: '41万',
                    total7: '5949万',
                    price: '559.03',
                    time: '3个月',
                    site: 'Austrilia',
                    haoping: '99.5%',
                    address: 'UK'
                }, {
                    rank: '4',
                    storeName: 'mjd128',
                    amount: '201977',
                    amount7: '41万',
                    total7: '5949万',
                    price: '559.03',
                    time: '3个月',
                    site: 'Austrilia',
                    haoping: '99.5%',
                    address: 'UK'
                }, {
                    rank: '5',
                    storeName: 'mjd128',
                    amount: '201977',
                    amount7: '41万',
                    total7: '5949万',
                    price: '559.03',
                    time: '3个月',
                    site: 'Austrilia',
                    haoping: '99.5%',
                    address: 'UK'
                }, {
                    rank: '6',
                    storeName: 'mjd128',
                    amount: '201977',
                    amount7: '41万',
                    total7: '5949万',
                    price: '559.03',
                    time: '3个月',
                    site: 'Austrilia',
                    haoping: '99.5%',
                    address: 'UK'
                }, {
                    rank: '7',
                    storeName: 'mjd128',
                    amount: '201977',
                    amount7: '41万',
                    total7: '5949万',
                    price: '559.03',
                    time: '3个月',
                    site: 'Austrilia',
                    haoping: '99.5%',
                    address: 'UK'
                }, {
                    rank: '8',
                    storeName: 'mjd128',
                    amount: '201977',
                    amount7: '41万',
                    total7: '5949万',
                    price: '559.03',
                    time: '3个月',
                    site: 'Austrilia',
                    haoping: '99.5%',
                    address: 'UK'
                }, {
                    rank: '9',
                    storeName: 'mjd128',
                    amount: '201977',
                    amount7: '41万',
                    total7: '5949万',
                    price: '559.03',
                    time: '3个月',
                    site: 'Austrilia',
                    haoping: '99.5%',
                    address: 'UK'
                }, {
                    rank: '10',
                    storeName: 'mjd128',
                    amount: '201977',
                    amount7: '41万',
                    total7: '5949万',
                    price: '559.03',
                    time: '3个月',
                    site: 'Austrilia',
                    haoping: '99.5%',
                    address: 'UK'
                }
            ],
        }
    }
    // 获取菜单 索引
    getMenuIndex(index){
        console.log(index)
    }
    render(){
        return(
            <div>
                <img src={eBayImg} alt="" className="storerank-logo" />

                <StoreRankCategory getIndex={this.getMenuIndex} />

                <div style={{ width: '100%', height: '18px' }}>
                    <div className="common-warp-1200">
                        <Row style={{ height: '18px', lineHeight: '18px', fontSize: '18px', color: '#0b5da7' }}>
                            <Col span={12} style={{ height: '18px', borderLeft: '6px solid #0b5da7', textIndent: '6px' }}>
                                新店榜
                            </Col>
                            <Col span={12} style={{ height: '18px', fontSize: '14px', color: '#333', textAlign: 'right' }}>
                                新店铺（ 开店不满3个月） 近7日销量排序
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="common-warp-1200">
                    <Table columns={columns} dataSource={this.state.data} rowKey="rank" bordered loading={false} pagination={false} onChange={this.tableSort} />
                </div>
            </div>
        )
    }
}

export default EbaySroreRank;
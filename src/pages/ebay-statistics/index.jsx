import React, { Component } from 'react';
import { Row, Col, Select, Table } from 'antd';
import './index.css'
import eBayImg from '@/assets/images/ebay.png';

const Option = Select.Option;
const industry = [
    { key: 1, value: '服装' },
    { key: 2, value: '电子' },
    { key: 3, value: '餐饮' }
]
// 表格信息
const columns = [
    {
        title: '排名',
        dataIndex: 'rank',
        align: 'center',
        width: '70px'
    }, {
        title: '行业',
        dataIndex: 'industry',
        align: 'center',
        width: '168px'
    }, {
        title: '产品数量',
        dataIndex: 'amount',
        align: 'center',
        sorter: (a, b) => parseInt(a.amount) - parseInt(b.amount),
        sortDirections: ['descend', 'ascend'],
    }, {
        title: '近7日销售量',
        dataIndex: 'amount7',
        align: 'center'
    }, {
        title: '近7日销售额',
        dataIndex: 'total7',
        align: 'center'
    }, {
        title: '近30日销售量',
        dataIndex: 'amount30',
        align: 'center'
    }, {
        title: '近30日销售额',
        dataIndex: 'total30',
        align: 'center'
    }, {
        title: '平均价格',
        dataIndex: 'price',
        align: 'center'
    }, {
        title: '最高价格',
        dataIndex: 'highprice',
        align: 'center'
    }, {
        title: '最低价格',
        dataIndex: 'lowprice',
        align: 'center'
    }, {
        title: '店铺数',
        dataIndex: 'storeAmount',
        align: 'center'
    }
];


class EbayStatistics extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    rank: '1',
                    industry: 'Clothing, Shoes & Accessories',
                    amount: '201977',
                    amount7: '41万',
                    total7: '5949万',
                    amount30: '207万',
                    total30: '2.97亿',
                    price: '559.03',
                    highprice: '66120',
                    lowprice: '1',
                    storeAmount: '6089'
                }, {
                    rank: '2',
                    industry: 'Clothing, Shoes & Accessories',
                    amount: '201097',
                    amount7: '41万',
                    total7: '5949万',
                    amount30: '207万',
                    total30: '2.97亿',
                    price: '559.03',
                    highprice: '66120',
                    lowprice: '1',
                    storeAmount: '6089'
                }, {
                    rank: '3',
                    industry: 'Clothing, Shoes & Accessories',
                    amount: '10977',
                    amount7: '41万',
                    total7: '5949万',
                    amount30: '207万',
                    total30: '2.97亿',
                    price: '559.03',
                    highprice: '66120',
                    lowprice: '1',
                    storeAmount: '6089'
                }, {
                    rank: '4',
                    industry: 'Clothing, Shoes & Accessories',
                    amount: '21097',
                    amount7: '41万',
                    total7: '5949万',
                    amount30: '207万',
                    total30: '2.97亿',
                    price: '559.03',
                    highprice: '66120',
                    lowprice: '1',
                    storeAmount: '6089'
                }, {
                    rank: '5',
                    industry: 'Clothing, Shoes & Accessories',
                    amount: '20107',
                    amount7: '41万',
                    total7: '5949万',
                    amount30: '207万',
                    total30: '2.97亿',
                    price: '559.03',
                    highprice: '66120',
                    lowprice: '1',
                    storeAmount: '6089'
                }, {
                    rank: '6',
                    industry: 'Clothing, Shoes & Accessories',
                    amount: '20109',
                    amount7: '41万',
                    total7: '5949万',
                    amount30: '207万',
                    total30: '2.97亿',
                    price: '559.03',
                    highprice: '66120',
                    lowprice: '1',
                    storeAmount: '6089'
                }, {
                    rank: '7',
                    industry: 'Clothing, Shoes & Accessories',
                    amount: '2010977',
                    amount7: '41万',
                    total7: '5949万',
                    amount30: '207万',
                    total30: '2.97亿',
                    price: '559.03',
                    highprice: '66120',
                    lowprice: '1',
                    storeAmount: '6089'
                }, {
                    rank: '8',
                    industry: 'Clothing, Shoes & Accessories',
                    amount: '2010977',
                    amount7: '41万',
                    total7: '5949万',
                    amount30: '207万',
                    total30: '2.97亿',
                    price: '559.03',
                    highprice: '66120',
                    lowprice: '1',
                    storeAmount: '6089'
                }, {
                    rank: '9',
                    industry: 'Clothing, Shoes & Accessories',
                    amount: '2010977',
                    amount7: '41万',
                    total7: '5949万',
                    amount30: '207万',
                    total30: '2.97亿',
                    price: '559.03',
                    highprice: '66120',
                    lowprice: '1',
                    storeAmount: '6089'
                }, {
                    rank: '10',
                    industry: 'Clothing, Shoes & Accessories',
                    amount: '2010977',
                    amount7: '41万',
                    total7: '5949万',
                    amount30: '207万',
                    total30: '2.97亿',
                    price: '559.03',
                    highprice: '66120',
                    lowprice: '1',
                    storeAmount: '6089'
                }
            ],
        }
    }
    // 表格的   排序
    tableSort = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    }
    render(){
        return(
            <div>
                <img src={eBayImg} alt="" className="statistics-logo" />

                <div className="search-condition-warp">
                    <Row className="search-condition-box">
                        <Col span={17}>
                            近7日行业销售量排行（每周五0点更新）
                        </Col>
                        <Col span={7}>
                            选择行业&nbsp;&nbsp;&nbsp;&nbsp;
                            <Select defaultValue={industry[0].key} size="large" style={{ width: '268px' }}>
                                {
                                    industry.map(item => {
                                        return <Option key={item.key} value={item.key}>{item.value}</Option>
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                </div>

                <div className="common-warp-1200">
                    <Table columns={columns} dataSource={this.state.data} rowKey="rank" bordered loading={false} pagination={false} onChange={this.tableSort} />
                </div>
            </div>
        )
    }
}

export default EbayStatistics;
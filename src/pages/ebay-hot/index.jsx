import React, { Component } from 'react';
import SearchBox from '@/components/common/SearchBox';
import SearchConditionRow from '@/components/common/SearchConditionRow';
import demoImg from '@/assets/images/table-img.png'

import { Table, Row, Col, Pagination } from 'antd';

// 表格信息
const columns = [
    {
        title: '产品主图',
        dataIndex: 'img',
        align: 'center',
        width: '90px',
        render: path => <img src={path} alt="" />
    }, {
        title: '产品标题',
        dataIndex: 'title',
        align: 'center',
        width: '200px'
    }, {
        title: '刊登类目',
        dataIndex: 'cate',
        align: 'center',
        width: '160px'
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
        title: '售价',
        dataIndex: 'price',
        align: 'center'
    }, {
        title: '刊登站点',
        dataIndex: 'site',
        align: 'center'
    }, {
        title: '所属店铺',
        dataIndex: 'store',
        align: 'center'
    }
];

// 搜索筛选条件
const searchConditions = [
    { key: 1, value: '近7日销量' },
    { key: 2, value: '近9日销量' },
    { key: 3, value: '近12日销量' }
]

class EbayHot extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: [
                {
                    id: '1',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    amount30: 432,
                    total30: 6402,
                    price: '￥(14.88+0)',
                    site: 'US',
                    store: 'h1clothing'
                }, {
                    id: '2',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    amount30: 432,
                    total30: 6402,
                    price: '￥(14.88+0)',
                    site: 'US',
                    store: 'h1clothing'
                }, {
                    id: '3',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    amount30: 432,
                    total30: 6402,
                    price: '￥(14.88+0)',
                    site: 'US',
                    store: 'h1clothing'
                }, {
                    id: '4',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    amount30: 432,
                    total30: 6402,
                    price: '￥(14.88+0)',
                    site: 'US',
                    store: 'h1clothing'
                }, {
                    id: '5',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    amount30: 432,
                    total30: 6402,
                    price: '￥(14.88+0)',
                    site: 'US',
                    store: 'h1clothing'
                }, {
                    id: '6',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    amount30: 432,
                    total30: 6402,
                    price: '￥(14.88+0)',
                    site: 'US',
                    store: 'h1clothing'
                }, {
                    id: '7',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    amount30: 432,
                    total30: 6402,
                    price: '￥(14.88+0)',
                    site: 'US',
                    store: 'h1clothing'
                }, {
                    id: '8',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    amount30: 432,
                    total30: 6402,
                    price: '￥(14.88+0)',
                    site: 'US',
                    store: 'h1clothing'
                }, {
                    id: '9',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    amount30: 432,
                    total30: 6402,
                    price: '￥(14.88+0)',
                    site: 'US',
                    store: 'h1clothing'
                }, {
                    id: '10',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    amount30: 432,
                    total30: 6402,
                    price: '￥(14.88+0)',
                    site: 'US',
                    store: 'h1clothing'
                }
            ],
            pagination: {
                total: 100,
                current: 2,
                pageSize: 10
            }
        }

    }
    // 分页
    onChange(current) {
        console.log(current);
        console.log(this)
    }
    // 点击查询按钮
    getSearchInput(text, con) {
        console.log(text, con)
    }
    render(){
        return(
            <div>
                <SearchBox searchConditions={searchConditions} getSearchInput={this.getSearchInput} />
                <SearchConditionRow />
                
                <div style={{ width: '1200px', height: 'auto', overflow: 'hidden', margin: '20px auto' }}>
                    <Table columns={columns} dataSource={this.state.data} rowKey="id" bordered loading={false} pagination={false} />
                    <Row style={{ height: '50px', lineHeight: '50px', marginBottom: '30px' }}>
                        <Col span={4}>
                            最多显示{this.state.pagination.total}条结果
                        </Col>
                        <Col span={20} style={{ textAlign: 'right', marginTop: '9px' }}>
                            <Pagination 
                                size="large" 
                                total={this.state.pagination.total} 
                                showTotal={() => `Total ${this.state.pagination.total} items`} 
                                onChange={val => this.onChange(val)} 
                                defaultCurrent={this.state.pagination.current} />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default EbayHot;
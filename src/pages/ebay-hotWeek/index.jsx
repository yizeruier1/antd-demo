import React, { Component } from 'react';
import SearchBox from '@/components/common/SearchBox';
import demoImg from '@/assets/images/table-img.png'

import { Table, Row, Col, Pagination, Button, Popover  } from 'antd';

// 表格信息
const columns = [
    {
        title: '子款图片',
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
        width: '160px',
        render: (text, record) => {
            const content = (
                <span>{record.cate}</span>
            )
            return (
                <Popover content={content}>
                    {text}
                </Popover>
            )

        }
    }, {
        title: 'SKU',
        dataIndex: 'sku',
        align: 'center'
    }, {
        title: '款式一',
        dataIndex: 'style1',
        align: 'center'
    }, {
        title: '款式二',
        dataIndex: 'style2',
        align: 'center'
    }, {
        title: '款式三',
        dataIndex: 'style3',
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
        title: '售价',
        dataIndex: 'price',
        align: 'center'
    }
];


class EbayHotWeek extends Component {
    constructor(props) {
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
                    price: '￥(14.88+0)',
                    style1: 'Color: Blank',
                    style2: 'Size: 100',
                    style3: 'position',
                    sku: 'FULL-BLCK-S'
                }, {
                    id: '2',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    price: '￥(14.88+0)',
                    style1: 'Color: Blank',
                    style2: 'Size: 100',
                    style3: 'position',
                    sku: 'FULL-BLCK-S'
                }, {
                    id: '3',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    price: '￥(14.88+0)',
                    style1: 'Color: Blank',
                    style2: 'Size: 100',
                    style3: 'position',
                    sku: 'FULL-BLCK-S'
                }, {
                    id: '4',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    price: '￥(14.88+0)',
                    style1: 'Color: Blank',
                    style2: 'Size: 100',
                    style3: 'position',
                    sku: 'FULL-BLCK-S'
                }, {
                    id: '5',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    price: '￥(14.88+0)',
                    style1: 'Color: Blank',
                    style2: 'Size: 100',
                    style3: 'position',
                    sku: 'FULL-BLCK-S'
                }, {
                    id: '6',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    price: '￥(14.88+0)',
                    style1: 'Color: Blank',
                    style2: 'Size: 100',
                    style3: 'position',
                    sku: 'FULL-BLCK-S'
                }, {
                    id: '7',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    price: '￥(14.88+0)',
                    style1: 'Color: Blank',
                    style2: 'Size: 100',
                    style3: 'position',
                    sku: 'FULL-BLCK-S'
                }, {
                    id: '8',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    price: '￥(14.88+0)',
                    style1: 'Color: Blank',
                    style2: 'Size: 100',
                    style3: 'position',
                    sku: 'FULL-BLCK-S'
                }, {
                    id: '9',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    price: '￥(14.88+0)',
                    style1: 'Color: Blank',
                    style2: 'Size: 100',
                    style3: 'position',
                    sku: 'FULL-BLCK-S'
                }, {
                    id: '10',
                    img: demoImg,
                    title: 'Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch',
                    cate: 'Health & Beauty:Makeup:Makeup -Bags & Cases',
                    amount7: 43,
                    total7: 640,
                    price: '￥(14.88+0)',
                    style1: 'Color: Blank',
                    style2: 'Size: 100',
                    style3: 'position',
                    sku: 'FULL-BLCK-S'
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
    }
    // 点击查询按钮
    getSearchInput(text, con) {
        console.log(text, con)
    }
    render(){
        return(
            <div>
                <SearchBox getSearchInput={this.getSearchInput} />
                <div className="search-condition-warp">
                    <Row className="search-condition-box">
                        <Col span={22}>
                            近7日商品子款销售量排行（ 每周四0点更新）
                        </Col>
                        <Col span={2}>
                            <Button type="primary" size="large">产品导出</Button>
                        </Col>
                    </Row>
                </div>

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
                                onChange={this.onChange}
                                defaultCurrent={this.state.pagination.current} />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default EbayHotWeek;
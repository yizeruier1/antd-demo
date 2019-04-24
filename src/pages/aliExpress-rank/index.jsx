import React, { Component } from 'react';
import SearchBox from '@/components/common/SearchBox';
import { Row, Col, Button, Divider, Icon, Table  } from 'antd';

// 搜索筛选条件
const searchConditions = [
    { key: 1, value: '商品' },
    { key: 2, value: '店铺' },
    { key: 3, value: '品牌' }
]

// 查看详情列
const columns1 = [
    {
        title: '日期',
        dataIndex: 'date',
        align: 'center'
    }, {
        title: '在售商品数',
        dataIndex: 'onsaleNum',
        align: 'center'
    }, {
        title: '收录商品数',
        dataIndex: 'includedNum',
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
        title: '粉丝数',
        dataIndex: 'fansNum',
        align: 'center'
    }, {
        title: '好评率',
        dataIndex: 'goodRate',
        align: 'center'
    }
]

class AliRank extends Component {
    constructor(props){
        super(props)
        this.state = {
            showDetail: false,
            data: [
                { id: 1, rank: 1, storeName: 'HICUTE Official Store', storeId: '4034053', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', fansNum: 8086, openTime: '2018-04-27', goodRate: '84%', address: 'shen zhen shi, China' },
                { id: 2, rank: 2, storeName: 'HICUTE Official Store', storeId: '4034053', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', fansNum: 8086, openTime: '2018-04-27', goodRate: '84%', address: 'shen zhen shi, China' },
                { id: 3, rank: 3, storeName: 'HICUTE Official Store', storeId: '4034053', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', fansNum: 8086, openTime: '2018-04-27', goodRate: '84%', address: 'shen zhen shi, China' },
                { id: 4, rank: 4, storeName: 'HICUTE Official Store', storeId: '4034053', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', fansNum: 8086, openTime: '2018-04-27', goodRate: '84%', address: 'shen zhen shi, China' },
                { id: 5, rank: 5, storeName: 'HICUTE Official Store', storeId: '4034053', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', fansNum: 8086, openTime: '2018-04-27', goodRate: '84%', address: 'shen zhen shi, China' },
                { id: 6, rank: 6, storeName: 'HICUTE Official Store', storeId: '4034053', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', fansNum: 8086, openTime: '2018-04-27', goodRate: '84%', address: 'shen zhen shi, China' },
                { id: 7, rank: 7, storeName: 'HICUTE Official Store', storeId: '4034053', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', fansNum: 8086, openTime: '2018-04-27', goodRate: '84%', address: 'shen zhen shi, China' },
                { id: 8, rank: 8, storeName: 'HICUTE Official Store', storeId: '4034053', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', fansNum: 8086, openTime: '2018-04-27', goodRate: '84%', address: 'shen zhen shi, China' },
                { id: 9, rank: 9, storeName: 'HICUTE Official Store', storeId: '4034053', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', fansNum: 8086, openTime: '2018-04-27', goodRate: '84%', address: 'shen zhen shi, China' },
                { id: 10, rank: 10, storeName: 'HICUTE Official Store', storeId: '4034053', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', fansNum: 8086, openTime: '2018-04-27', goodRate: '84%', address: 'shen zhen shi, China' }
            ],
            data1: [
                { id: 1 ,date: '2019-02-04～2019-02-10', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', goodRate: '98.4%', fansNum: 8086 },
                { id: 2 ,date: '2019-02-04～2019-02-10', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', goodRate: '98.4%', fansNum: 8086 },
                { id: 3 ,date: '2019-02-04～2019-02-10', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', goodRate: '98.4%', fansNum: 8086 },
                { id: 4 ,date: '2019-02-04～2019-02-10', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', goodRate: '98.4%', fansNum: 8086 },
                { id: 5 ,date: '2019-02-04～2019-02-10', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', goodRate: '98.4%', fansNum: 8086 },
                { id: 6 ,date: '2019-02-04～2019-02-10', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', goodRate: '98.4%', fansNum: 8086 },
                { id: 7 ,date: '2019-02-04～2019-02-10', onsaleNum: 32, includedNum: 32, amount7: 3000, total7: '￥20000', goodRate: '98.4%', fansNum: 8086 }
            ]
        }
    }
    // 点击查询按钮
    getSearchInput(text, con) {
        console.log(text, con)
    }

    // 查看
    viewDetail(id) {
        console.log(id)
        this.setState({ showDetail: true })
    }

    render(){
        // 表格信息
        const columns = [
            {
                title: '排名',
                dataIndex: 'rank',
                align: 'center',
                width: '110px',
                render: (text, record) => {
                    const icon = record.id % 2 === 0 ? <Icon type="arrow-up" style={{ color: '#b6ce65' }} /> : <Icon type="arrow-down" style={{ color: '#f16c6c' }} />
                    return (
                        <div>
                            <span>{text}</span>
                            <Divider type="vertical" />
                            {icon}&nbsp;&nbsp;
                            <span>-2</span>
                        </div>
                    )
                }
            }, {
                title: '店铺名称',
                dataIndex: 'storeName',
                align: 'center',
                width: '200px'
            }, {
                title: '店铺ID',
                dataIndex: 'storeId',
                align: 'center',
            }, {
                title: '在售商品数',
                dataIndex: 'onsaleNum',
                align: 'center'
            }, {
                title: '收录商品数',
                dataIndex: 'includedNum',
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
                title: '粉丝数',
                dataIndex: 'fansNum',
                align: 'center'
            }, {
                title: '开店时间',
                dataIndex: 'openTime',
                align: 'center'
            }, {
                title: '好评率',
                dataIndex: 'goodRate',
                align: 'center'
            }, {
                title: '注册地区',
                dataIndex: 'address',
                align: 'center'
            }, {
                title: '销售历史',
                align: 'center',
                render: (text, record) => {
                    return (
                        <Button type="primary" onClick={() => this.viewDetail(record.id)}>查看</Button>
                    )
                }
            }
        ]
        const btnCol = (
            <Col span={2}>
                <Button type="primary" onClick={() => this.setState({ showDetail: false })}>返回列表</Button>
            </Col>
        )
        return(
            <div>
                <SearchBox searchConditions={searchConditions} getSearchInput={this.getSearchInput} isAli={true} />

                <div className="search-condition-warp">
                    <Row className="search-condition-box">
                        <Col span={this.state.showDetail ? 22 : 24}>
                            店铺近7日销售量排名（ 每周一0点更新）
                        </Col>
                        {
                            this.state.showDetail ? btnCol : null
                        }
                    </Row>
                </div>

                <div className="common-warp-1200">
                    {
                        this.state.showDetail ? 
                        <Table columns={columns1} dataSource={this.state.data1} rowKey="id" bordered loading={false} pagination={false} /> :
                        <Table columns={columns} dataSource={this.state.data} rowKey="id" bordered loading={false} pagination={false} />
                    }
                </div>
            </div>
        )
    }
}

export default AliRank
import React, { Component } from 'react';
import SearchBox from '@/components/common/SearchBox';
import SearchConditionRow from '@/components/common/SearchConditionRow';
import demoImg from '@/assets/images/table-img.png';
import { Table, Icon, Button } from 'antd';

// 搜索筛选条件
const searchConditions = [
    { key: 1, value: '商品' },
    { key: 2, value: '店铺' },
    { key: 3, value: '品牌' }
]

class AliHot extends Component {

    state = {
        data: [
            { id: 1, img: demoImg, title: 'Protective tempered glass for iphone 6 7 5 s se 6 6s 8 plus XS max XR glass... ', priceRange: '$ 0.84～2.5', order6: '131423', keep: '234', amountMount: '12423', amountWeek: '12424', brand: 'iPhone', store: 'HICUTE Official Store', detail: '1' },
            { id: 2, img: demoImg, title: 'Protective tempered glass for iphone 6 7 5 s se 6 6s 8 plus XS max XR glass... ', priceRange: '$ 0.84～2.5', order6: '131423', keep: '234', amountMount: '12423', amountWeek: '12424', brand: 'iPhone', store: 'HICUTE Official Store', detail: '1' },
            { id: 3, img: demoImg, title: 'Protective tempered glass for iphone 6 7 5 s se 6 6s 8 plus XS max XR glass... ', priceRange: '$ 0.84～2.5', order6: '131423', keep: '234', amountMount: '12423', amountWeek: '12424', brand: 'iPhone', store: 'HICUTE Official Store', detail: '1' },
            { id: 4, img: demoImg, title: 'Protective tempered glass for iphone 6 7 5 s se 6 6s 8 plus XS max XR glass... ', priceRange: '$ 0.84～2.5', order6: '131423', keep: '234', amountMount: '12423', amountWeek: '12424', brand: 'iPhone', store: 'HICUTE Official Store', detail: '1' },
            { id: 5, img: demoImg, title: 'Protective tempered glass for iphone 6 7 5 s se 6 6s 8 plus XS max XR glass... ', priceRange: '$ 0.84～2.5', order6: '131423', keep: '234', amountMount: '12423', amountWeek: '12424', brand: 'iPhone', store: 'HICUTE Official Store', detail: '1' },
            { id: 6, img: demoImg, title: 'Protective tempered glass for iphone 6 7 5 s se 6 6s 8 plus XS max XR glass... ', priceRange: '$ 0.84～2.5', order6: '131423', keep: '234', amountMount: '12423', amountWeek: '12424', brand: 'iPhone', store: 'HICUTE Official Store', detail: '1' },
            { id: 7, img: demoImg, title: 'Protective tempered glass for iphone 6 7 5 s se 6 6s 8 plus XS max XR glass... ', priceRange: '$ 0.84～2.5', order6: '131423', keep: '234', amountMount: '12423', amountWeek: '12424', brand: 'iPhone', store: 'HICUTE Official Store', detail: '1' }
        ]
    }

    // 点击查询按钮
    getSearchInput(text, con) {
        console.log(text, con)
    }

    // 查看同款
    viewSameKind(id){
        console.log(id)
    }

    render(){
        // 表格信息
        const columns = [
            {
                title: '产品主图',
                dataIndex: 'img',
                align: 'center',
                width: '100px',
                render: path => <img src={path} alt="" />
            }, {
                title: '产品标题',
                dataIndex: 'title',
                align: 'center',
                width: '220px'
            }, {
                title: '价格区间',
                dataIndex: 'priceRange',
                align: 'center'
            }, {
                title: '近6个月订单数',
                dataIndex: 'order6',
                align: 'center'
            }, {
                title: '收藏数',
                dataIndex: 'keep',
                align: 'center'
            }, {
                title: '月销量',
                dataIndex: 'amountMount',
                align: 'center'
            }, {
                title: '周销量',
                dataIndex: 'amountWeek',
                align: 'center'
            }, {
                title: '品牌',
                dataIndex: 'brand',
                align: 'center'
            }, {
                title: '店铺',
                dataIndex: 'store',
                align: 'center'
            }, {
                title: '详情',
                dataIndex: 'detail',
                align: 'center',
                render: (text, record) => {
                    return (
                        <div>
                            <Icon type="bar-chart" style={{ fontSize: '22px', color: '#0b5da7', verticalAlign: 'middle', cursor: 'pointer' }} />&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button type="primary" onClick={() => this.viewSameKind(record.id)}>同款</Button>
                        </div>
                    )
                }
            }
        ];
        // searchConditions 搜索下拉框数据    getSearchInput 获取 搜索内容    isAli  是否为 aliExpress 平台
        return(
            <div>
                <SearchBox searchConditions={searchConditions} getSearchInput={this.getSearchInput} isAli={true} />

                <SearchConditionRow twoBtn={true} />

                <div className="common-warp-1200">
                    <Table columns={columns} dataSource={this.state.data} rowKey="id" bordered loading={false} pagination={false} />
                </div>
            </div>
        )
    }
}

export default AliHot
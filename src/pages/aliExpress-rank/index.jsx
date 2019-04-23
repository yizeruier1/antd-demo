import React, { Component } from 'react';
import SearchBox from '@/components/common/SearchBox';
import{ Row, Col } from 'antd';

// 搜索筛选条件
const searchConditions = [
    { key: 1, value: '商品' },
    { key: 2, value: '店铺' },
    { key: 3, value: '品牌' }
]

class AliRank extends Component {
    // 点击查询按钮
    getSearchInput(text, con) {
        console.log(text, con)
    }

    render(){
        return(
            <div>
                <SearchBox searchConditions={searchConditions} getSearchInput={this.getSearchInput} isAli={true} />

                <div className="search-condition-warp">
                    <Row className="search-condition-box">
                        <Col span={24}>
                            店铺近7日销售量排名（ 每周一0点更新）
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default AliRank
import React, { Component } from 'react'
import { Row, Col, Button, Select, Checkbox } from 'antd'
const Option = Select.Option

class SearchConditionRow extends Component{
    handleChange(e) {
        console.log(`selected ${e}`);
    }
    onChange(e){
        console.log(`checked = ${e.target.checked}`);
    }
    render(){
        return(
            <div className="search-condition-warp">
                <div className="search-condition-box">
                    <Row>
                        <Col span={1}>
                            排序
                        </Col>
                        <Col span={this.props.twoBtn ? 18 : 19}>
                            <Select defaultValue="4" style={{ width: 268 }} onChange={e => this.handleChange(e)} size="large">
                                <Option value="1">近1日销量</Option>
                                <Option value="2">近2日销量</Option>
                                <Option value="3" disabled>近3日销量</Option>
                                <Option value="4">近七日销量</Option>
                            </Select>
                        </Col>
                        <Col span={this.props.twoBtn ? 3 : 2} style={{ textAlign: this.props.twoBtn ? 'center' : 'right' }}>
                            {
                                this.props.twoBtn ? 
                                <Button size="large">清空检索</Button> : 
                                <Checkbox onChange={ e => this.onChange(e)}>新上架</Checkbox>
                            }
                        </Col>
                        <Col span={2}>
                            <Button type="primary" size="large">产品导出</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default SearchConditionRow
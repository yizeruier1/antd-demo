import React, { Component } from 'react';
import eBayImg from '@/assets/images/ebay.png';
import { Row, Col, Select, Input, Button } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;

class SearchBox extends Component {
    constructor(props){
        super(props)

        this.state = {
            text: '',
            condition: null
        }
    }

    // 点击搜索
    goSearch(){
        let { text, condition } = this.state
        this.props.getSearchInput(text, condition)
    }
    // 获取 下拉框 内容
    getCon(value) {
        this.setState({
            condition: value
        })
    }
    render(){
        let sele;
        if(this.props.searchConditions){
            sele = (
                <Select defaultValue={this.props.searchConditions[0].key} size="large" style={{ width: '120px' }} onChange={value => this.getCon(value)}>
                {
                    this.props.searchConditions.map(item => {
                        return <Option key={item.key} value={item.key}>{item.value}</Option>
                    })
                }
                </Select>
            )
        }
        return(
            <div className="searchbox">
                <div>
                    <img src={eBayImg} alt="" />
                    <Row>
                        <Col span={24}>
                            <InputGroup compact style={{ width: '100%' }}>
                                { sele }
                                <Input style={this.props.searchConditions ? { width: '342px' } : { width: '462px' }} 
                                    size="large" 
                                    onChange={e => this.setState({ text: e.target.value })} />
                                <Button type="primary" size="large" onClick={() => this.goSearch()}>查询</Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default SearchBox;
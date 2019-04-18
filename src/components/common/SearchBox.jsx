import React, { Component } from 'react';
import eBayImg from '@/assets/images/ebay.png';
import { Row, Col, Select, Input, Button } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;

class SearchBox extends Component {
    render(){
        return(
            <div className="searchbox">
                <div>
                    <img src={eBayImg} alt="" />
                    <Row>
                        <Col span={24}>
                            <InputGroup compact style={{ width: '100%' }}>
                                <Select defaultValue="Zhejiang" size="large">
                                    <Option value="Zhejiang">Zhejiang</Option>
                                    <Option value="Jiangsu">Jiangsu</Option>
                                </Select>
                                <Input style={{ width: '67%' }} defaultValue="Xihu District, Hangzhou" size="large" />
                                <Button type="primary" size="large">查询</Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default SearchBox;
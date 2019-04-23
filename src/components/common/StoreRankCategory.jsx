import React, { Component } from 'react';
import { Icon } from 'antd';


class StoreRankCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 2
        }
    }
    sendIndex(index){
        this.setState({index: index})
        this.props.getIndex(index)
    }
    render(){
        return(
            <div className="storerank-catebox">
                <div className={this.state.index === 1 ? 'storerank-catebox-item ac-srcbi' : 'storerank-catebox-item'} onClick={() => this.sendIndex(1)}>
                    <p>每周日更新</p>
                    <h3><Icon type="fire" style={{ color: this.state.index === 1 ? '#fff' : '#0b5da7' }} /></h3>
                    <h1>飙升榜</h1>
                    <div>
                        SOARING LIST
                    </div>
                </div>

                <div className={this.state.index === 2 ? 'storerank-catebox-item ac-srcbi' : 'storerank-catebox-item'} onClick={() => this.sendIndex(2)}>
                    <p>每周日更新</p>
                    <h3><Icon type="shop" style={{ color: this.state.index === 2 ? '#fff' : '#0b5da7' }} /></h3>
                    <h1>新店榜</h1>
                    <div>
                        NEW STORE LIST
                    </div>
                </div>

                <div className={this.state.index === 3 ? 'storerank-catebox-item ac-srcbi' : 'storerank-catebox-item'} onClick={() => this.sendIndex(3)}>
                    <p>每周日更新</p>
                    <h3><Icon type="flag" style={{ color: this.state.index === 3 ? '#fff' : '#0b5da7' }} /></h3>
                    <h1>热卖榜</h1>
                    <div>
                        HOT LIST
                    </div>
                </div>
            </div>
        )
    }
}

export default StoreRankCategory
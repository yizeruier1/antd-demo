import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '@/components/common/HomeHeader.jsx'
import HomeFooter from '@/components/common/HomeFooter.jsx'
import { mapStateToProps } from '@/redux/map.js'
import EbayNav from './EbayNav.jsx'
import AliNav from './AliNav.jsx'
import './index.css'

class Home extends Component {
    render() {
        const warpStyle = {
            width: '100%',
            minHeight: '700px',
            overflow: 'hidden',
            backgroundColor: '#f5f8fa'
        }
        return (
            <div className="homewarp">
                <HomeHeader />
                { this.props.platform === 'eBay' ? <EbayNav /> : <AliNav /> }

                <div style={warpStyle}>
                    { this.props.children }
                </div>

                <HomeFooter />
            </div>
        );
    }
}

export default Home = connect(mapStateToProps)(Home)
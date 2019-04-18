import React, { Component } from 'react';
import HomeHeader from '@/components/common/HomeHeader.jsx'
import HomeFooter from '@/components/common/HomeFooter.jsx'
import HomeNav from '@/components/common/HomeNav.jsx'
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
                <HomeNav />

                <div style={warpStyle}>
                    { this.props.children }
                </div>

                <HomeFooter />
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import HomeHeader from '@/components/common/HomeHeader.jsx'
import './index.css'

class Home extends Component {
    render() {
        return (
            <div className="homewarp">
                <HomeHeader />
            </div>
        );
    }
}

export default Home;
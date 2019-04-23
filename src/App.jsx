import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from '@/redux/map.js'
import Login from '@/pages/login/index.jsx'
import Home from '@/pages/home/index.jsx'

// ebay papges
import EbayHot from '@/pages/ebay-hot/index.jsx'
import EbayHotWeek from '@/pages/ebay-hotWeek/index.jsx'
import EbaySameKind from '@/pages/ebay-sameKind/index.jsx'
import EbayStatistics from '@/pages/ebay-statistics/index.jsx'
import EbaySroreRank from '@/pages/ebay-storeRank/index.jsx'

// ebay papges
import AliHot from '@/pages/aliExpress-hot/index.jsx'
import AliRank from '@/pages/aliExpress-rank/index.jsx'
import AliMonitor from '@/pages/aliExpress-monitor/index.jsx'
import AliStatistics from '@/pages/aliExpress-statistics/index.jsx'


class App extends Component {

    componentDidMount(){
        const localPlat = window.localStorage.getItem('platform')
        if (localPlat) {
            if (localPlat === 'aliExpress'){
                this.props.setAli()
            }else{
                this.props.setEbay()
            }
        }
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Home>
                        <Switch>
                            <Route exact path="/home/eBay/eBayhot" component={EbayHot} />
                            <Route path="/home/eBay/eBayhotweek" component={EbayHotWeek} />
                            <Route path="/home/eBay/eBaysamekind" component={EbaySameKind} />
                            <Route path="/home/eBay/eBayatatistics" component={EbayStatistics} />
                            <Route path="/home/eBay/storerank" component={EbaySroreRank} />

                            <Route path="/home/aliExpress/alihot" component={AliHot} />
                            <Route path="/home/aliExpress/alirank" component={AliRank} />
                            <Route path="/home/aliExpress/alimonitor" component={AliMonitor} />
                            <Route path="/home/aliExpress/alistatistics" component={AliStatistics} />

                            <Redirect exact to={this.props.platform ? '/home/eBay/eBayhot' : '/home/aliExpress/alihot'} />
                        </Switch>
                    </Home>
                </Switch>
            </Router>
        );
    }
}

export default App = connect(mapStateToProps, mapDispatchToProps)(App)
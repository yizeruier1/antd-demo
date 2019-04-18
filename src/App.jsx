import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '@/pages/login/index.jsx'
import Home from '@/pages/home/index.jsx'

// ebay papges
import EbayHot from '@/pages/ebay-hot/index.jsx'
import EbayHotWeek from '@/pages/ebay-hotWeek/index.jsx'
import EbaySameKind from '@/pages/ebay-sameKind/index.jsx'
import EbayStatistics from '@/pages/ebay-statistics/index.jsx'
import EbaySroreRank from '@/pages/ebay-storeRank/index.jsx'


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Home>
                        <Switch>
                            <Redirect exact from="/home" to="/home/eBayhot" />
                            <Route exact path="/home/eBayhot" component={EbayHot} />
                            <Route path="/home/eBayhotweek" component={EbayHotWeek} />
                            <Route path="/home/eBaysamekind" component={EbaySameKind} />
                            <Route path="/home/eBayatatistics" component={EbayStatistics} />
                            <Route path="/home/storerank" component={EbaySroreRank} />
                        </Switch>
                    </Home>
                </Switch>
            </Router>
        );
    }
}

export default App;
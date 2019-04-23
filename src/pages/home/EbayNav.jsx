import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logoimg from '../../assets/images/nav-logo.png';

class HomeNav extends Component {
    render(){
        return(
            <div className="homenav-warp">
                <div>
                    <NavLink to="/home/eBay/eBayhot" className="linkItem">
                        <img src={logoimg} alt="" />
                    </NavLink>

                    <NavLink to="/home/eBay/eBayhot" className="linkItem" activeClassName="aclinkitem">
                        热销产品
                    </NavLink>

                    <NavLink to="/home/eBay/eBayhotweek" className="linkItem" activeClassName="aclinkitem">
                        每周爆款
                    </NavLink>

                    <NavLink to="/home/eBay/eBayatatistics" className="linkItem" activeClassName="aclinkitem">
                        行业统计
                    </NavLink>

                    <NavLink to="/home/eBay/storerank" className="linkItem" activeClassName="aclinkitem">
                        店铺排行
                    </NavLink>

                    <NavLink to="/home/eBay/eBaysamekind" className="linkItem" activeClassName="aclinkitem">
                        全网同款
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default HomeNav;
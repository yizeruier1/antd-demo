import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logoimg from '../../assets/images/nav-logo.png';

class HomeNav extends Component {
    render(){
        return(
            <div className="homenav-warp">
                <div>
                    <NavLink to="/home/aliExpress/alihot" className="linkItem">
                        <img src={logoimg} alt="" />
                    </NavLink>

                    <NavLink to="/home/aliExpress/alihot" className="linkItem" activeClassName="aclinkitem">
                        热销产品
                    </NavLink>

                    <NavLink to="/home/aliExpress/alirank" className="linkItem" activeClassName="aclinkitem">
                        店铺销售排名
                    </NavLink>

                    <NavLink to="/home/aliExpress/alistatistics" className="linkItem" activeClassName="aclinkitem">
                        品牌统计
                    </NavLink>

                    <NavLink to="/home/aliExpress/alimonitor" className="linkItem" activeClassName="aclinkitem">
                        我要监控商品
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default HomeNav;
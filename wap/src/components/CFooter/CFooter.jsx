import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import styles from './CFooter.css';
import Index from '../../pages/Index';
import Message from '../../pages/Message';

import Login from '../Login/Login';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

const CFooter = () => {
    return (
        <div className={styles.footer}>
            <NavLink exact to="/" className={styles.footerNav} activeClassName={styles.active}><i className={`glyphicon glyphicon-home ${styles.footerIcon}`}></i>首页</NavLink>
            {/* <NavLink exact to="/message" className={styles.footerNav} activeClassName={styles.active}><i className={`glyphicon glyphicon-pencil ${styles.footerIcon}`}></i>发布</NavLink> */}
            <NavLink exact to="/message" className={styles.footerNav} activeClassName={styles.active}><i className={`glyphicon glyphicon-envelope ${styles.footerIcon}`}></i>消息</NavLink>
            <NavLink exact to="/login" className={styles.footerNav} activeClassName={styles.active}><i className={`glyphicon glyphicon-user ${styles.footerIcon}`}></i>我的</NavLink>
            {/* activeClass的样式会被bootstrap覆盖，需要到css调整 */}
        </div>
    )
}

export default CFooter
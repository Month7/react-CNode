import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './CHeader.css';

const CHeader = () => {
    return (
        <div className={styles.header} id="CHeader">
            <NavLink exact to="/"  className={styles.headerNav} activeClassName={styles.active}>全部</NavLink>
            <NavLink exact to="/tab=good" className={styles.headerNav} activeClassName={styles.active}>精华</NavLink>
            <NavLink exact to="/tab=share" className={styles.headerNav} activeClassName={styles.active}>分享</NavLink>
            <NavLink exact to="/tab=ask" className={styles.headerNav} activeClassName={styles.active}>问答</NavLink>
            <NavLink exact to="/tab=dev" className={styles.headerNav} activeClassName={styles.active}>测试</NavLink>
            <NavLink exact to="/tab=job" className={styles.headerNav} activeClassName={styles.active}>招聘</NavLink>
            <NavLink exact to="/about" className={styles.headerNav} activeClassName={styles.active}>关于</NavLink>
        </div>
    )
}

export default CHeader
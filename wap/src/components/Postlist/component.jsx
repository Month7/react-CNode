import React from 'react';
import PostlistAuthor from '../Postlist-author/component';
import PostlistTitle from '../Postlist-title/component';
import PostlistCount from '../Postlist-count/component';

import styles from './component.css'
const Postlist = ({list,match}) => {
    return (
        <div className={styles.list}>
            <PostlistAuthor list={list} match={match}/>
            <PostlistTitle list={list} />
            <PostlistCount list={list} />
        </div>
    )
}

export default Postlist;
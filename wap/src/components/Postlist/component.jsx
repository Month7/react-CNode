import React from 'react';
import PostlistAuthor from '../Postlist-author/component';
import PostlistTitle from '../Postlist-title/component';
import './component.css'
const Postlist = ({list,match}) => {
    return (
        <div className="list">
            <PostlistAuthor list={list} match={match}/>
            <PostlistTitle list={list} />
        </div>
    )
}

export default Postlist;
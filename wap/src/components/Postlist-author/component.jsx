import React,{Component} from 'react';
import './component.css';
import {Link} from 'react-router-dom';
import XXX from '../Postlist-count/component';
import './component.css'

const PostlistAuthor = ({list,match}) => {
   
    return (
        <div className="author">
            <div className="author-image">
                <Link to={`${match.url}/c`} component={XXX}><img src={list.author.avatar_url}/></Link>
            </div>
            <div>
                <div>
                    {/* <Link>{list.author.loginname}</Link> */}
                </div>
            </div>
        </div>
    )
}
export default PostlistAuthor;
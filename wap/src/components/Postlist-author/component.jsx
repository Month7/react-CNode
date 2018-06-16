import React,{Component} from 'react';
import './component.css';
import {Link} from 'react-router-dom';
import XXX from '../Postlist-count/component';
import styles from './component.css'

const PostlistAuthor = ({list,match}) => {
    return (
        <div className={styles.author}>
            <div>
                <Link to=""><img className={styles.authorImage} src={list.author.avatar_url}/></Link>
            </div>
            <div>
                <div>
                    <Link to="">{list.author.loginname}</Link>
                </div>
            </div>
        </div>
    )
}
export default PostlistAuthor;
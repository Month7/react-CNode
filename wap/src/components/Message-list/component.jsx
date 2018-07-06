import React from 'react';
import {Link} from 'react-router-dom';
import styles from './component.css';
import { $http} from '../../utils/util'
const MessageList = ({message}) => {
    return (
        <li className={styles.mLi}>
            <div className={styles.mAvator}>
                <Link to={`/user/${message.author.loginname}`}>
                    <img src={message.author.avatar_url} title={message.author.loginname} />
                </Link>
            </div>
            <div className={styles.msgMContent}>
                <Link to={`/user/${message.author.loginname}`}>
                    {message.author.loginname}
                </Link>     
                {message.type === 'reply' ? 
                (<div>
                回复了你的话题
                    <Link to={`/topic/${message.topic.title}`}>
                        {message.topic.id}
                    </Link>             
                </div>) : (<div>
                    在话题 
                    <Link to={`/topic/${message.topic.id}`}>{message.topic.title}</Link>中@了你
                </div>)}         
             </div>
        </li>
    )
}

export default MessageList;
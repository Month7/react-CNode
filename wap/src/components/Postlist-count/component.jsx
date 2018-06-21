import React from 'react';
import styles from './component.css'
import { filterTime } from '../../utils/util'

const PostlistCount = ({list}) => {
    
    return (
        <div className={styles.count}>
            <div>
                <i className="glyphicon glyphicon-eye-open"></i>{list.visit_count}
            </div>
            <div>
                <i className="glyphicon glyphicon-comment"></i>{list.reply_count}
            </div>
            <div>
                <i className="glyphicon glyphicon-time"></i>{filterTime(list.create_at)}
            </div>
        </div>
    )
}

export default PostlistCount;
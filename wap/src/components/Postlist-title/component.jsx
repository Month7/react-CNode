import React from 'react';
import {Link} from 'react-router-dom';
import styles from './component.css'

const PostlistTitle = ({list}) => {
    return (
        <div className={styles.title}>
            <Link to={`/topic/${list.id}`}>{list.title}</Link>
        </div>
    )
}

export default PostlistTitle;
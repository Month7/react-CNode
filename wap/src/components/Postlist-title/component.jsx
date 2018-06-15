import React from 'react';
import {Link} from 'react-router-dom';
import './component.css'

const PostlistTitle = ({list}) => {
    return (
        <div className="title">
            <Link to="/fdfd">{list.title}</Link>
            {/* <router-link :to="{name:'article',params:{id:list.id}}">{{list.title}}</router-link> */}
        </div>
    )
}

export default PostlistTitle;
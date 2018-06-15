import React from 'react';
import './component.css'

const PostlistCount = ({list}) => {
    
    return (
        <div className="count">
            <div>
                <i className="glyphicon glyphicon-eye-open"></i>{list.visit_count}
            </div>
            <div>
                <i className="glyphicon glyphicon-comment"></i>{list.reply_count}
            </div>
            <div>
                <i className="glyphicon glyphicon-time"></i>{list.create_at}
            </div>
        </div>
    )
}

export default PostlistCount;
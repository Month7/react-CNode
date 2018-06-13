import React,{Component} from 'react';
import {formatPassTime} from '../utils/utilFun'

const ArticleReplies = ({item,index,loginname}) => {
    
    return (
        <div key={item.id} className="review-list">
            <img className="header-img" src={item.author.avatar_url}/>
            <div className="review-box">
                <div className="review-box-top">
                    <div className="review-box-information">
                        <span>{item.author.loginname}</span>
                        <a>{`${index+1}楼•${formatPassTime(item.create_at)}`}</a>
                        {loginname === item.author.loginname?<p className="author">作者</p>:''}
                    </div>
                    {/* 点赞 */}
                    <div className="review-box-fun">

                    </div>
                </div>
                <div className="review-box-con">
                    <p dangerouslySetInnerHTML={{__html:item.content}}></p>
                </div>
            </div>
        </div>
    )
}

export default ArticleReplies
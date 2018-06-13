import React,{Component} from 'react';
import {
    Link
} from 'react-router-dom'
import {tabText,formatPassTime} from '../utils/utilFun';
import logo from '../logo.svg'


const PostList = ({lists})=>{
   
    return (
        <div className="home-list">
            {
                lists.map((item)=>{
                    return (
                        <div key={item.id} className="home-list-li">
                            <div className="home-list-left">
                                <img src={item.author.avatar_url}/>
                                <p><span>{item.reply_count}/</span>{item.visit_count}</p>
                                <div className="home-list-cen">
                                <span className={(item.top ||item.good)?'cur':''}>{tabText(item.tab,item.good,item.top)}</span>
                                <Link to={`/topic/${item.id}`}>{item.title}</Link>
                                </div>
                            </div>
                            <div className="home-list-right">
                                <img src={logo}/>
                                <span>{formatPassTime(item.last_reply_at)}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList;
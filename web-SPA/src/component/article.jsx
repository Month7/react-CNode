import React,{Component, useEffect, useState} from 'react';
import axios from 'axios';
import '../css/article.css'
import {tabText,formatPassTime} from '../utils/utilFun'
import ArticleReplies from '../component/article-replies'
import UserSideBar from '../component/userinfo'

const getData = async (id) => {
  const { data } = await axios.request({
    url: `https://cnodejs.org/api/v1/topic/${id}`,
  })
  return data
}

const Article = (props) => {
  const [detials, setDetials] = useState({})
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    const id = props.match.params.id;
    (async () => {
      const { data } = await getData(id)
      setDetials(data)
      setLoading(false)
    })()
  }, [])
  if (loading) {
    return (
      <div>
        loading
      </div>
    )
  }
          return (
            <div className="main">
                <div className="main-left">
                    <div className="particulars-con">
                        <div className="particulars-con-header">
                            <p>{(detials.top||detials.good)?<span>{tabText(null,detials.good,detials.top)}</span>:''}  {detials.title}</p>
                            <div className="particulars-con-information">
                                <div className="particulars-con-text">
                                <span> 发布于 {formatPassTime(detials.create_at)}</span>
                                <span> 作者 {detials.author.loginname} </span>
                                <span> {detials.visit_count} 次浏览</span>
                                <span> 最后一次编辑是 {formatPassTime(detials.last_reply_at)}</span>
                                <span> 来自{tabText(detials.tab)}</span>
                                </div>
                                <div style={{backgroundColor:detials.is_collect?'#e5e5e5':'#80bd01',color:detials.is_collect?'#333':'#fff'}} className="particulars-collect-but">{detials.is_collect?'取消收藏':'收藏'}</div>
                            </div>
                        </div>
                        {/* 文章内容 */}
                        <div className="particulars-vessel" dangerouslySetInnerHTML={{__html:detials.content}}></div>
                        <div className="review-item">
                            <p className="main-title">{detials.reply_count}回复</p>
                            {
                                detials.replies.map((item,index)=>
                                    <ArticleReplies key={item.id} item={item} index={index} loginname={detials.author.loginname}/>
                                )
                            }
                        </div>
                    </div>
                </div>
                <UserSideBar tabState={1} userData={detials.author} loginname={detials.author.loginname}/>
            </div>
        )
}

export default Article
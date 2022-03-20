import React,{Component, useEffect, useState} from 'react'
import axios from 'axios'
import '../css/userlist.css';
import UserInfo from '../component/userinfo.jsx';
import {
    Link
} from 'react-router-dom'

const UserList = (props: any) => {
  const [ loginName, setLoginName ] = useState(props.loginname)
  const [ userData, setUserData ] = useState<any>([])
  const [ recentReplies, setRecentReplies ] = useState([])
  const [ recentTopics, setRecentTopics ] = useState<any>([])

  const getData = async () => {
    const loginname = props.match.params.loginname || sessionStorage.getItem('loginname'); 
    const { data } = await axios({
      url: `https://cnodejs.org/api/v1/user/${loginname}`,
    })
    return data
  }

  useEffect(() => {
    (async function () {
      const { data } = await getData()
      setUserData(data)
      setRecentReplies(data.recent_replies)
      setRecentTopics(data.recent_topics)
    })()
  }, [])

          return (
            <div className="main">
                <div className="main-left">
                    <div className="panel-header">主页 / </div>
                    <div className="panel-content">
                        <img className="userAvatar" src={userData.avatar_url} alt="头像" />
                        <span className="">{userData.loginname}</span>
                    </div>
                    <div className="panel-header">
                        <div className="panel-title">最近创建的话题</div>
                        <div>
                            {recentTopics.map((item: any)=>
                            <div className="recentCell" key={item.id}>
                                <img src={item.author.avatar_url} alt="头像" className="authorAcator"/>
                                <span>{item.author.loginname}</span>
                                <Link to={`/topic/${item.id}`}>{item.title}</Link>
                            </div>)}
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="panel-header">
                        <div className="panel-title">最近回复的话题</div>
                        <div>
                            {recentReplies.map((item: any)=>
                            <div className="recentCell" key={item.id}>
                                <img src={item.author.avatar_url} alt="头像" className="authorAcator"/>
                                <span>{item.author.loginname}</span>
                                <Link to={`/topic/${item.id}`}>{item.title}</Link>
                            </div>)}
                        </div>
                        <div className=""></div>
                    </div>
                </div>   
                <div>
                    <UserInfo />
                </div>
            </div>
        )
}

export default UserList
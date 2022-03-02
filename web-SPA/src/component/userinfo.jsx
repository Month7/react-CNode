import React,{Component, useEffect, useState} from 'react';
import {isLogin} from '../utils/utilFun'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../css/userinfo.css'

const UserInfo = (props) => {
  const defaultLoginname = props.loginname || sessionStorage.getItem('loginname')
  const [loginname, setLoginname] = useState(defaultLoginname)
  const [userData, setUserData] = useState({})
  const getData = async () => {
    const { data } = await axios.request({
      url:`https://cnodejs.org/api/v1/user/${loginname}`,
    })
    return data
  }
  useEffect(() => {
    
    (async function () {
      const { data } = await getData()
      setUserData(data)
    })()
  }, [])
  const { tabState } = props
  return (
                <div className="particulars-right">
                    {(isLogin()||tabState === 1)?<div className="main-title">{tabState===1?'作者':'个人信息'}</div>:''}
                    {(isLogin()||tabState === 1)?<div className="author">
                    <div className="author-information">
                        <Link to={`/user/${userData.loginname}`}><img src={userData.avatar_url} alt="头像" /></Link>
                        <Link to={`/user/${userData.loginname}`}>{userData.loginname}</Link>
                    </div>
                    <span className="user-score">积分: {userData.score}</span>
                </div>:
                    <div className="introduce-box">
                        <p className="introduce-title">CNode社区</p>
                        <Link className="login-buttom" to="/login">登录</Link>
                    </div>
                }
                </div>
            )
}

export default UserInfo
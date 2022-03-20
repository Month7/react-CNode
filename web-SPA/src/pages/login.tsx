import React,{Component, useState} from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom'

const Login = () => {
  const [ text, setText ] = useState('')
  const [ isLogin, setIslogin ] = useState(false)

  const login = () => {
    console.log('new Login')
        let value = text;
        axios({
            url:'https://cnodejs.org/api/v1/accesstoken',
            method:'post',
            data:{
                accesstoken:value
            }
        }).then((response)=>{
            if(response.data.success === true){
                sessionStorage.setItem('accesstoken',value);
                sessionStorage.setItem('loginname',response.data.loginname);
                sessionStorage.setItem('avatarUrl',response.data.avatar_url);
                
                setIslogin(true)
            }
        })
    }
    if(isLogin){
      return (
        <Redirect to="/" />
      )
    }
  return (
                <div className="main">
                    <div className="main-left">
                        <div className="main-title">
                            <p>主页 / <span>登录</span></p>
                        </div>
                        <div className="login-box">
                            <input className="login-key" onChange={(e) => setText(e.target.value)} placeholder="accesstoken"/>
                            <div className="login-but" onClick={login}>
                                <span>登录</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
}

export default Login
import React,{Component} from 'react';
import {isLogin} from '../utils/utilFun'
import {Link} from 'react-router-dom'
import axios from 'axios'

class UserInfo extends Component{
    constructor(props){
        super();
        this.state = {
            loginname:props.loginname,
            
        }
    }
    getData(){
        axios({
            url:`https://cnodejs.org/api/v1/user/:${this.state.loginname}`,
            method:'get'
        }).then((response)=>{

        })
    }
    render(){
        const {userData,tabState,loginname} = this.props;
        return (
            <div className="particulars-right">
                {(isLogin()||tabState === 1)?<div className="main-title">{tabState===1?'作者':'个人信息'}</div>:''}
                {(isLogin()||tabState === 1)?<div className="author">
                <div className="author-information">
                    <Link to={`/user/${userData.loginname}`}><img src={userData.avatar_url} alt="" /></Link>
                    <Link to={`/user/${userData.loginname}`}>{userData.loginname}</Link>
                  {/* <span>{userData.loginname}</span> */}
                </div>
                {/* <span>积分{userData.score}</span> */}
            </div>:
                <div className="introduce-box">
                    <p className="introduce-title">CNode社区</p>
                    <Link className="login-buttom" to="/login">登录</Link>
                </div>
            }
            </div>
        )
    }
}

export default UserInfo
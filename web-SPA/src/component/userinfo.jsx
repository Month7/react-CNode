import React,{Component, useState} from 'react';
import {isLogin} from '../utils/utilFun'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../css/userinfo.css'

const UserInfo = (props) => {
  const defaultLoginname = props.loginname || sessionStorage.getItem('loginname')
  const [loginname, setLoginname] = useState(defaultLoginname)
  const [userData, setUserData] = useState({})
  const getData = async () => {
    
  }
  return (<div></div>)
}

// class UserInfo extends Component{
//     constructor(props){
//         super();
//         this.state = {
//             loginname:props.loginname || sessionStorage.getItem('loginname'),
//             userData:{}
//         }
//     }
//     getData(){
//         axios({
//             url:`https://cnodejs.org/api/v1/user/${this.state.loginname}`,
//             method:'get'
//         }).then((response)=>{
//             console.log(response.data.data);
//             this.setState({
//                 userData:response.data.data
//             })
//         }).catch((error)=>{
//             console.log(error);
//         })
//     }
//     componentDidMount() {
//         this.getData();
//     }
//     render(){
//         const {userData,tabState,loginname} = this.state;
//         return (
//             <div className="particulars-right">
//                 {(isLogin()||tabState === 1)?<div className="main-title">{tabState===1?'作者':'个人信息'}</div>:''}
//                 {(isLogin()||tabState === 1)?<div className="author">
//                 <div className="author-information">
//                     <Link to={`/user/${userData.loginname}`}><img src={userData.avatar_url} alt="头像" /></Link>
//                     <Link to={`/user/${userData.loginname}`}>{userData.loginname}</Link>
//                   {/* <span>{userData.loginname}</span> */}
//                 </div>
//                 <span className="user-score">积分: {userData.score}</span>
//             </div>:
//                 <div className="introduce-box">
//                     <p className="introduce-title">CNode社区</p>
//                     <Link className="login-buttom" to="/login">登录</Link>
//                 </div>
//             }
//             </div>
//         )
//     }
// }

export default UserInfo
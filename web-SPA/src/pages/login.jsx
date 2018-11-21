import React,{Component} from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom'

class Login extends Component{
    constructor(){
        super();
        this.state = {
            text:'',
            isLogin:false
        }
        this.changeInputText = this.changeInputText.bind(this);
        this.login = this.login.bind(this);
    }
    changeInputText(e){
        this.setState({
            text:e.target.value
        })
    }
    login(){
        let value = this.state.text;
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
                
                this.setState({
                    isLogin:true
                })
                console.log('登录成功!');
            }
        })
    }
    render(){
        if(this.state.isLogin){
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
                        <input className="login-key" onChange={this.changeInputText} placeholder="accesstoken"/>
                        <div className="login-but" onClick={this.login}>
                            <span>登录</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
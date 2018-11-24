import React,{Component} from 'react'
import axios from 'axios'
import '../css/userlist.css';
import UserInfo from '../component/userinfo.jsx';
import {
    Link
} from 'react-router-dom'

class UserList extends Component{
    constructor(props){
        super();
        this.state = {
            loginname:props.loginname,
            userData:{},
            recentReplies:[],
            recentTopics:[]
        }
    }
    getData(){
        let loginname = this.props.match.params.loginname || sessionStorage.getItem('loginname'); 
        axios({
            url:`https://cnodejs.org/api/v1/user/${loginname}`,
            method:'get'
        }).then((response)=>{
            if(response.data.success === true){
                let userData = response.data.data
                this.setState({
                    userData:response.data.data,
                    recentReplies:userData.recent_replies,
                    recentTopics:userData.recent_topics,
                })
            }
        })
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        const {userData,recentReplies,recentTopics} = this.state;
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
                            {recentTopics.map((item)=>
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
                            {recentReplies.map((item)=>
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
}

export default UserList
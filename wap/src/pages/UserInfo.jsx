import React,{Component} from 'react';
import UserInfoHeader from '../components/UserInfo-header/component';
import { $http } from '../utils/util';
import UserInfoNav from '../components/UserInfo-nav/component';

class UserInfo extends Component{
    constructor(){
        super();
        this.state = {
            avatar_url: '',
            loginname: '',
            create_at: '',
            score: '',
            recent_topics: [],
            recent_replies: []
        }
        this.navCallback = this.navCallback.bind(this);
    }
    getData(){
        let loginname = this.props.match.params.loginname;
        let url = `/user/${loginname}`;
        const method = 'get';
        const success = (data) => {
            this.setState({
                avatar_url: data.data.avatar_url,
                loginname: data.data.loginname,
                create_at: data.data.create_at,
                score: data.data.score,
                recent_topics: data.data.recent_topics,
                recent_replies: data.data.recent_replies
            })
        }
        $http(url,method,success);
        
    }
    componentDidMount(){
        this.getData();
    }
    navCallback(){

    }
    render(){
        let { avatar_url,loginname,create_at,score,recent_topics,recent_replies } = this.state;
        return (
            <div>
                <UserInfoHeader 
                avatar_url={avatar_url} 
                loginname={loginname} 
                create_at={create_at}
                score={score}/>
                <UserInfoNav navCallback={this.navCallback}/>
                
            </div>
        )
    }
}

export default UserInfo;
import React,{Component} from 'react'
import axios from 'axios'

class UserList extends Component{
    constructor(props){
        super();
        this.state = {
            loginname:props.loginname,
            userData:{}
        }
    }
    getData(){
        let loginname = this.props.match.params.loginname || sessionStorage.getItem('loginname'); 
        console.log(loginname);
        axios({
            url:`https://cnodejs.org/api/v1/user/${loginname}`,
            method:'get'
        }).then((response)=>{
            if(response.data.success === true){
                this.setState({
                    userData:response.data.data
                })
            }
        })
    }
    componentDidMount(){
        console.log('???');
        this.getData();
    }
    render(){
        const {userData} = this.state;
        return (
            <div className="main">
                <div className="main-left">
                    <div className="main-title">
                        <p>主页 / <span></span></p>
                    </div>
                    <div className="main-content">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default UserList
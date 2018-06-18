import React,{Component} from 'react';
import styles from './Login.css';
import {getApi} from '../../utils/server';
import {withRouter} from "react-router-dom";

class Login extends Component{
    constructor(){
        super();
        this.state = {
            accesstoken: ''
        }
        this.inputChange = this.inputChange.bind(this);
        this.signin = this.signin.bind(this);
    }
    inputChange(e){
        this.setState({
            accesstoken: e.target.value
        })
    }
    signin(){
        const url = '/accesstoken';
        const method = 'post';
        const success = () => {
            sessionStorage.setItem('accesstoken',this.state.accesstoken);
            this.props.history.push("/");
        }
        const data = {
            accesstoken: this.state.accesstoken
        }
        getApi(url,method,success,data);
    }
    render(){
        return (
            <div className={styles.login}>
                <input type="text" placeholder="Access Token" className="token" onChange={this.inputChange}/>
                <div>
                    <button className="btn btn-success button" type="button" onClick={this.signin}>登录</button>
                </div>
            </div>
        )
    }

}

export default withRouter(Login);
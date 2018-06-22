import React,{Component} from 'react';
import styles from './Article-myreply.css';
import {$http} from '../../utils/util';

class MyReply extends Component{
    constructor(){
        super();
        this.state = {
            txt: '',
        }
        this.sendMyTxt = this.sendMyTxt.bind(this);
        this.changeTxt = this.changeTxt.bind(this);
    }
    sendMyTxt(){
        let id = this.props.id;
        let url = `/topic/${id}/replies`;
        const method = 'post';
        //需改进         
        const success = () => {
        //    window.location.reload();
            () => {
                this.props.getData();
            }
        }
        let data = {
            content: this.state.txt,
            accesstoken:sessionStorage.getItem('accesstoken'),
        }
        $http(url,method,success,data);
    }
    changeTxt(e){
        this.setState({
            txt: e.target.value
        })
    }
    render(){
        return (
            <div className={styles.myReply}>
                <input type="text" onChange={this.changeTxt} value={this.state.txt} placeholder="写下你的评论..."/>
                <span className="glyphicon glyphicon-send send-icon" onClick={this.sendMyTxt}></span>
            </div>
        )
    }
}

export default MyReply;
import React,{Component} from 'react';
import styles from './Article-myreply.css';
import {getApi} from '../../utils/server';

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
        const success = () => {
            console.log(id);
        }
        let data = {
            content: this.state.txt,
            
            // accesstoken:sessionStorage.getItem('accesstoken'),
        }
        getApi(url,method,success,data);
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
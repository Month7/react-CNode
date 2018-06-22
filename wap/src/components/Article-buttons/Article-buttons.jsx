import React,{Component} from 'react';
import styles from './Article-buttons.css';
import { $http } from '../../utils/util';

class ArticleButtons extends Component{
    constructor(props){
        super();
        
    }
    toggtlRelpyText(index,loginname,replyNum){
        return () => {
            if(replyNum === index){
                replyNum = -1;
            }
            else{
                replyNum = index;
            }
            this.props.callBack(index,loginname,replyNum)
        }
    }
    getData(){ 
        this.props.getData();
    }
    //判断是否已经点过赞
    isUps(array){
        if(array){
            var accesstoken = sessionStorage.getItem('accesstoken');
            if(accesstoken){
                var id = sessionStorage.getItem('userId')
                return array.indexOf(id) >= 0;
            }
            else{
                return false;
            }
        }
       
    }
    //点赞 如果已经点过赞，取消点赞
    up(id){
        var accesstoken = sessionStorage.getItem('accesstoken');
        if(accesstoken){
            let url = `/reply/${id}/ups`
            const method = 'post';
            const success = (data) => {
                this.getData();
            }
            const data = {
                accesstoken:accesstoken
            }
            $http(url,method,success,data);
        }
        else{
        }
    }
    render(){
        var post = this.props.post;
        var index = this.props.index;
        var replyNum = this.props.replyNum;
       
        var ups = post.ups;
      
        var active = this.isUps(ups)?`${styles.up}`:'';
        return (
            <div className={styles.repliesBottom}>
                <span className="glyphicon glyphicon-share-alt" onClick={this.toggtlRelpyText(index,post.author.loginname,replyNum)}>回复</span>
                <i className={`glyphicon glyphicon-thumbs-up ${active}`} onClick={()=> this.up(post.id)}>{post.ups.length}</i>
            </div>
        )
    }
}

export default ArticleButtons;
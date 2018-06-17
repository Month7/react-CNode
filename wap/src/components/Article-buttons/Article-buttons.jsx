import React,{Component} from 'react';
import styles from './Article-buttons.css';

class ArticleButtons extends Component{
    constructor(){
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
    render(){
        var post = this.props.post;
        var index = this.props.index;
        var replyNum = this.props.replyNum;
        return (
            <div className={styles.repliesBottom}>
                <span className="glyphicon glyphicon-share-alt" onClick={this.toggtlRelpyText(index,post.author.loginname,replyNum)}>回复</span>
                <i className="glyphicon glyphicon-thumbs-up"></i>
            </div>
        )
    }
}

export default ArticleButtons;
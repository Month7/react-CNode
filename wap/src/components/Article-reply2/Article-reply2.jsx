import React,{Component} from 'react';
import styles from './Article-reply2.css';

class ArticleReply2 extends Component{
    constructor(){
        super();   
    }
    render(){
        var { index,replyNum } = this.props;
        if(index === replyNum){
            return (
                <div className={styles.relpyText}>
                    <textarea></textarea>
                    <button type="button" className="btn btn-success">回复</button>
                </div> 
            )
        }
        return (
            <div></div>
        )
    }
}

export default ArticleReply2;
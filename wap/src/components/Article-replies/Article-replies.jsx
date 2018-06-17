import React,{Component} from 'react';
import styles from './Article-replies.css';
import Reply from '../Article-reply/Article-reply';

class Replies extends Component{
    constructor(){
        super();
    }
    render(){
        let lists = this.props.lists;
        return (
            <ul className={styles.replies}>
                {lists.map((list,index)=>(<Reply key={index} post={list} index={index}/>))}
            </ul>
        )
    }
}

export default Replies;
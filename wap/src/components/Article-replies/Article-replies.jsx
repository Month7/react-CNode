import React,{Component} from 'react';
import styles from './Article-replies.css';
import Reply from '../Article-reply/Article-reply';
import { $http } from '../../utils/util'

class Replies extends Component{
    constructor(){
        super();
        this.state = {
            lists: null
        }
        this.getData = this.getData.bind(this);
    }
    getData(){
        let id = this.props.id;
        const url = `/topic/${id}`;
        const method = 'get';
        const success = (data) => {
            this.setState({
                lists: data.data.replies
            })
        }
        $http(url,method,success);
    }
    render(){
        let id = this.props.id;
        let lists = this.state.lists || this.props.lists;
        return (
            <ul className={styles.replies}>
                {lists.map((list,index)=>(<Reply id={id} key={index} post={list} index={index} getData={this.getData}/>))}
            </ul>
        )
    }
}

export default Replies;
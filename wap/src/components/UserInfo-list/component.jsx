import React,{Component} from 'react';
import styles from './component.css';
import { Link } from 'react-router-dom';

class UserInfoList extends Component{
    constructor(){
        super();   
    }
    render(){
        let { data } = this.props;
        if(data.length === 0){
            return (
                <div>没有记录</div>
            )
        }
        return (
            <li>
                <div className={styles.topicsImg}>
                    <img src={data.author.avatar_url} className={styles.topicImg} alt="404"/>
                    {data.author.loginname}
                </div>
                <div className={styles.topicsTitle}>
                    <Link to={`/topic/${data.id}`}>{data.title}</Link>
                </div>
            </li>
        )
    }
}

export default UserInfoList;
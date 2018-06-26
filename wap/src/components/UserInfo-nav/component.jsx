import React,{Component} from 'react';
import styles from './component.css';
import UserInfoList from '../UserInfo-list/component'
import '../../common/common.css'

class UserInfoNav extends Component{
    constructor(){
        super();
        this.state = {
            clicked: 'recent_replies'
        }
        this.changeNav = this.changeNav.bind(this);
    }
    changeNav(clicked){
        this.setState({
            clicked: clicked
        },()=>{
            this.props.navCallback(this.state.clicked);
        })
    }
    render(){
        let { clicked } = this.state;
        let { recent_replies,recent_topics } = this.props;
        return (
            <div>
                <div className={styles.userButtons}>
                    <span className={`${styles.replyButtons}`} onClick={()=>{this.changeNav('recent_replies')}}>回复</span>
                    <span className={`${styles.replyButtons}`} onClick={()=>{this.changeNav('recent_topics')}}>主题</span>
                </div>
                {clicked === 'recent_replies'? 
                (<ul>{recent_replies.map((data,index) => (<UserInfoList data={data} key={index} />))}</ul>)
                :(<ul>{recent_topics.map((data,index) => (<UserInfoList data={data} key={index} />))}</ul>)}
            </div>
           
        )
    }
} 
export default UserInfoNav;
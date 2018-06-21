import React,{Component} from 'react';
import styles from './component.css';

class UserInfoNav extends Component{
    constructor(){
        super();
        this.state = {
            clicked: 'un_read'
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
        let unRead = this.state.clicked === 'un_read'?styles.active:'';
        let Read = this.state.clicked === 'read'?styles.active:'';
        return (
            <div className={styles.userButtons}>
                <span className={`${styles.replyButtons} ${unRead}`} onClick={()=>{this.changeNav('un_read')}}>回复</span>
                <span className={`${styles.replyButtons} ${Read}`} onClick={()=>{this.changeNav('read')}}>主题</span>
            </div>
        )
    }
} 
export default UserInfoNav;
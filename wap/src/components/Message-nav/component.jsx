import React,{Component} from 'react';
import styles from './component.css';

class MessageNav extends Component{
    constructor(){
        super();
        this.state = {
            clicked: 'un_read'
        }
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
            <div className={styles.nav}>
                <span className={`${styles.mNav} ${unRead}`} onClick={()=>{this.changeNav('un_read')}}>未读消息</span>
                <span className={`${styles.mNav} ${Read}`} onClick={()=>{this.changeNav('read')}}>历史消息</span>
            </div>
        )
    }
} 
export default MessageNav;
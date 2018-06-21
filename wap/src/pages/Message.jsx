import React,{Component} from 'react';
import MessageHeader from '../components/Message-header/component';
import MessageNav from '../components/Message-nav/component';
import MessageUnread from '../components/Message-unread/component'; 
import Messageread from '../components/Message-read/component'

class Message extends Component{
    constructor(){
        super();
        this.state = {
            clicked: 'un_read'
        }
        this.navCallback = this.navCallback.bind(this);
    }
    getData(){

    }
    navCallback(clicked){
        this.setState({
            clicked: clicked
        })
    }
    render(){
        let { clicked } = this.state;
        return (
            <div>
                <MessageHeader />
                <MessageNav navCallback={this.navCallback} />
                {clicked === 'un_read'?<MessageUnread />:<Messageread />}
            </div>
        )
    }
}

export default Message;

import React,{Component} from 'react';
import { $http } from '../../utils/util';
import './component.css';
import MessageList from '../Message-list/component';

class MessagUneread extends Component{
    constructor(){
        super();
        this.state = {
            messages: []
        }
    }
    getData(){
        let url = `/messages?&accesstoken=${sessionStorage.getItem('accesstoken')}`;
        const method = 'get';
        const success = (data) => {
            this.setState({
                messages: data.data.hasnot_read_messages
            })
        }
        $http(url,method,success);
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        let { messages } = this.state;
        if(messages.length === 0){
            return (
                <li style={{textAlign:'center'}}>没有消息</li>
            )
        }
        return (
            <ul>
                {messages.map((message,index) => (
                    <MessageList key={index} message={message} />
                ))}
            </ul>
        )
    }
}

export default MessagUneread;
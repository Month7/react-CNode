import React,{Component} from 'react';
import {$http} from '../../utils/util';
import './component.css';
import MessageList from '../Message-list/component';

class Messageread extends Component{
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
                messages: data.data.has_read_messages
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
                <li>没有消息</li>
            )
        }
        return (
            // <ul>
            //             <li v-if="!messages.has_read_messages.length" style="text-align:center">
            //                 没有消息
            //             </li>
            //             {/* <li v-else v-for="(message,index) in messages.has_read_messages" :key="index" class="m-li">
            //                 <div class="m-avator">
            //                     <router-link :to="{name:'userinfo',params:{loginname:message.author.loginname}}">
            //                         <img :src="message.author.avatar_url" :title="message.author.loginname"/>
            //                     </router-link>
            //                 </div>
            //                 <div class="msg-m-content">
            //                     <router-link :to="{name:'userinfo',params:{loginname:message.author.loginname}}" class="msg-username">
            //                         {{message.author.loginname}}
            //                     </router-link>
            //                     <div v-if="message.type === 'reply'">
            //                         回复了你的话题
            //                         <router-link :to="{name:'article',params:{id:message.topic.id}}">
            //                             {{message.topic.title}}
            //                         </router-link>
            //                     </div>
            //                     <div v-if="message.type === 'at'">
            //                         在话题 
            //                         <router-link :to="{name:'article',params:{id:message.topic.id}}">
            //                             {{message.topic.title}}
            //                         </router-link>中@了你
            //                     </div>
            //                 </div>
            //             </li> */}
            //         </ul>
            <ul>
                {messages.map((message,index) => (
                    <MessageList key={index} message={message} />
                ))}
            </ul>
        )
    }
}

export default Messageread;
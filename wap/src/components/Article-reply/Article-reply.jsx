import React,{Component} from 'react';
import styles from './Article-reply.css';
import {NavLink} from 'react-router-dom';
import ArticleButtons from '../Article-buttons/Article-buttons';
import ArticleReply2 from '../Article-reply2/Article-reply2';

class Reply extends Component{
    constructor(){
        super();
        this.showIndex = -1;
        this.replyNum = -2;
        this.callBack = this.callBack.bind(this);
        this.state = {
            showIndex: -1,
            replyNum: -2,
        }
    }
    callBack(index,loginname,replyNum){
        this.setState({
            showIndex: index,
            replyNum: replyNum,
        })
    }

    render(){
        var post = this.props.post;
        var index = this.props.index;
        var {showIndex,replyNum} = this.state;
        console.log(this.state);
        return (
            <li className={styles.repliesLi}>
                <div className={styles.reply}>
                    <div className={styles.repliesSide}>
                            {/* <router-link :to="{name:'userinfo',params:{loginname:post.author.loginname}}">
                                <img :src="post.author.avatar_url"/>
                            </router-link> */}
                        <NavLink to="">
                            <img src={post.author.avatar_url} />
                        </NavLink>
                    </div>
                    <div className={styles.repliesContent}>
                        <div>
                            {/* <router-link :to="{name:'userinfo',params:{loginname:post.author.loginname}}">
                                {{post.author.loginname}}
                            </router-link> */}
                            <NavLink to="">
                                {post.author.loginname}
                            </NavLink>
                            <span className={styles.floor}>
                                #{index + 1}
                            </span>
                        </div>
                            <div className={styles.repliesTxt}>
                                <p dangerouslySetInnerHTML={{__html:post.content}}></p>
                            </div>
                        </div>
                        <ArticleButtons post={post} index={index} replyNum={replyNum} callBack={this.callBack}/>
                        {/* <div className={styles.repliesBottom}>
                            <span className="glyphicon glyphicon-share-alt" >回复</span>
                            <i className="glyphicon glyphicon-thumbs-up" ></i>{{post.ups.length}}
                        </div> */}
                    </div>
                    {/* <div className="relpy-text clearfix" v-if="relpyNum===index">
                        <textarea v-model="sendText"></textarea>
                        <button type="button" className="btn btn-success" style="float:right" @click="sendTxt(reply.id,post.id)">回复</button>
                    </div> */}
                    <ArticleReply2 index={showIndex} replyNum={replyNum}/>
                </li>
        )
    }
}

export default Reply
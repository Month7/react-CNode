import React,{Component} from 'react';
import {$http} from '../../utils/util';
import {NavLink} from 'react-router-dom';
import styles from './Article.css';
import MyReply from '../Article-myreply/Article-myreply';
import Replies from '../Article-replies/Article-replies';

class Article extends Component{
    constructor(){
        super();
        this.goBack = this.goBack.bind(this);
        this.state = {
            data: {},
            loading: true,
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        this.getData(id);
    }
    getData(id){
        const url = `/topic/${id}`;
        const method = 'get';
        const success = (data) => {
            this.setState({
                data: data.data,
                loading: false
            })
        }
        $http(url,method,success);
    }
    goBack(){
        this.props.history.goBack()  
    }
    render(){
        var { loading } = this.state;
        var reply = this.state.data;
        
        if(loading){
            return (
                <div></div>
            )
        }
        return (
            <div className={styles.article}>
                <div className={styles.articleHeader}>
                    <span className={styles.back} onClick={this.goBack}><i className="glyphicon glyphicon-chevron-left"></i></span>
                    <h4>主题</h4>
                </div>
                <div className={styles.articleUsername}>
                    <NavLink to="">
                        <img src={reply.author.avatar_url} />
                        {reply.author.loginname}
                    </NavLink>
                </div>
                <div className={styles.articleTitle}>
                    <div className={styles.tit}>
                        {reply.title}
                    </div>
                </div>
                <div className={styles.articleContent}>
                    <p dangerouslySetInnerHTML={{__html:reply.content}}></p>
                </div>
                <div className={styles.articleCount}>
                    共(<span>{reply.reply_count}</span>)条回复
                </div>
                <Replies lists={reply.replies} />
                <MyReply id={reply.id} getData={this.getData}/>
            </div>
        )
    }
}

export default Article;
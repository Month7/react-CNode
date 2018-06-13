import React, {Component} from 'react';
import axios from 'axios';
import PostList from '../component/postlist';
import UserInfo from '../component/userinfo'
import {Link} from 'react-router-dom'

class Index extends Component{
    constructor(){
        super();
        this.state = {
            titles:[
                {title:'全部',tabLab:'all'},
                {title:'精华',tabLab:'good'},
                {title:'分享',tabLab:'share'},
                {title:'问答',tabLab:'ask'},
                {title:'招聘',tabLab:'job'},
                {title:'客户端测试',tabLab:'dev'}
            ],
            lists:[],
            loading:true,
            selectTabIndex:0
        }
       
    }
    selectTab(index,tabLab){
        this.getData(tabLab,index);
    }
    getData(tabLab='',index){
        axios({
            url:`https://cnodejs.org/api/v1/topics/?tab=${tabLab}`,
            method:'get',
        }).then((response)=>{
            if(response.data.success === true){
                this.setState({
                    lists:response.data.data,
                    loading:false,
                    userData:''
                })
                if(tabLab!=''){
                    this.setState({
                        selectTabIndex:index
                    })
                }
            }
        })
    }
    componentDidMount(){
        this.getData();
    }
    render() {
        if(this.state.loading){
            return (
                <div>加载中...</div>
            )
        }
        let {titles,lists,selectTabIndex,userData} = this.state;
        return (
            <div className="main">
                <div className="main-left">
                    <div className="main-title">
                        <ul className="home-box-tab">
                            {
                                titles.map((title,index)=>
                                    <li key={index} onClick={this.selectTab.bind(this,index,title.tabLab)} className={index === selectTabIndex?'cur':''}>
                                        <Link to={`?/tab=${title.tabLab}`}>{title.title}</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <PostList lists={lists} />
                </div>
                <UserInfo userData={userData}/>
            </div>
        )
    }
}

export default Index;
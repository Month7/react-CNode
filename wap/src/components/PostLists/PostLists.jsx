import React,{Component} from 'react';
import Postlist from '../Postlist/component';
import loadingGif from '../../res/loading.gif';
import { $http } from '../../utils/util';
import styles from './component.css';

var addEvent = (obj,type,fn) => {
    // 处理不同浏览器之间的兼容性
    if (window.attachEvent){
        obj.attachEvent('on' + type,fn);
    } 
    else {
        obj.addEventListener(type,fn,false);
    }
}
class Postlists extends Component{
    constructor(){
        super();
        this.state = {
            lists: [],
            loading: true,
            loadMore: false
        }
        this.pageIndex = 2;
    }
    componentDidMount(){
        this.getData(this.props.match.params.tab);
    }
    getScrollTop = () => {
        return document.documentElement.scrollTop || document.body.scrollTop;
    }
    onTouchStart = (e) => {
        this.startY = e.changedTouches[0].clientY;
    }
    onLoadMoreData(tab='',page){
        let url = `/topics/?tab=${tab}&page=${page}`;
        const success = (data) =>{
            this.setState({
                lists: this.state.lists.concat(data.data),
                loadMore: false
            })
        }
        $http(url,'get',success);
    }
    onTouchEnd = (e) => {
        this.endY = e.changedTouches[0].clientY;
        this.diffY = this.startY - this.endY;
        // 页面总长度
        var height = this.refs.container.height || this.refs.container.offsetHeight;
        // 距离顶部的距离
        var top = this.getScrollTop();
        // var headerHeight = document.getElementById('CHeader').height || document.getElementById('CHeader').offsetHeight
        // console.log(headerHeight);
        if(this.diffY > 100 && top > height -700) {
            this.setState({
                loadMore: true
            })
            this.onLoadMoreData(this.props.match.params.tab,this.pageIndex++);
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({                   //setState是异步的
            loading: true
        });
        setTimeout(()=>{
            this.getData(nextProps.match.params.tab);
        },10)
    }
    getData(tab=''){
        let url = `/topics/?tab=${tab}`;
        const success = (data) =>{
            this.setState({
                lists:data.data,
                loading: false
            })
            // 添加触摸事件
            addEvent(this.refs.container,"touchstart",this.onTouchStart);
            addEvent(this.refs.container,"touchend",this.onTouchEnd);
        }
        $http(url,'get',success);
    }
    render(){
        var { lists,loadMore } = this.state;
        var style = loadMore?{
         
            height: '5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }:{
            display: 'none'
        }
        if(this.state.loading){
            return (
                <div className="loading">
                    <img src={loadingGif} />
                </div>
            )
        }
        return (
            <div className="all" ref="container">
                {lists.map((list,index) => <Postlist key={index} list={list} match={this.props.match}/>)}
                <div style={style}>
                    <div>
                        <i className={styles.loadingGif}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Postlists;
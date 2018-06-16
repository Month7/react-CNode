import React,{Component} from 'react';
import Postlist from './Postlist/component';
import axios from 'axios';
import loadingGif from '../res/loading.gif'


class Postlists extends Component{
    constructor(){
        super();
        this.state = {
            lists: [],
            loading: true
        }
    }
    componentDidMount(){
        this.getData(this.props.match.params.tab);
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
        axios({
            url:`https://cnodejs.org/api/v1/topics/?tab=${tab}`,
            method:'get'
        }).then((response)=>{
            if(response.data.success === true){
                this.setState({
                    lists:response.data.data,
                    loading: false
                })
            }
        })
    }
    render(){
        var lists = this.state.lists;
        if(this.state.loading){
            return (
                <div className="">
                    <img src={loadingGif} />
                </div>
            )
        }
        return (
            <div className="all">
                {lists.map((list,index) => <Postlist key={index} list={list} match={this.props.match}/>)}
            </div>
        )
    }
}

export default Postlists;
import React,{Component} from 'react';
import Postlist from './Postlist/component';
import loadingGif from '../res/loading.gif'
import { $http } from '../utils/util'
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
        let url = `/topics/?tab=${tab}`;
        const success = (data) =>{
            this.setState({
                lists:data.data,
                loading: false
            })
        }
        $http(url,'get',success);
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
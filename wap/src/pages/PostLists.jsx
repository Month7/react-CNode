import React,{Component} from 'react';
import Postlist from '../components/Postlist/component';
import axios from 'axios';


class Postlists extends Component{
    constructor(){
        super();
        this.state = {
            lists: []
        }
    }
    componentDidMount(){
        axios({
            url:`https://cnodejs.org/api/v1/topics`,
            method:'get'
        }).then((response)=>{
            if(response.data.success === true){
                this.setState({
                    lists:response.data.data
                })
            }
        })
    }
    render(){
        var lists = this.state.lists;
        return (
            <div className="all">
                {lists.map((list,index) => <Postlist key={index} list={list} match={this.props.match}/>)}
            </div>
        )
    }
}

export default Postlists;
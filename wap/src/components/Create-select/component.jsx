import React,{Component} from 'react';
import styles from './component.css'

class CreateSelect extends Component{
    constructor(){
        super();
        this.state = {
            type: ''
        }
        this.typeChange = this.typeChange.bind(this);
    }
    typeChange(e){
        this.setState({
            type: e.target.value
        },()=>{
            this.props.typeCallback(this.state.type)
        })
    }
    render(){
        
        return (
            <div className={styles.createType}>
               <select value={this.state.type} onChange={this.typeChange}>
                    <option value="">请选择</option>
                    <option value="share">分享</option>
                    <option value="ask">问答</option>
                    <option value="job">招聘</option>
                    <option value="dev">测试</option>
                </select>
            </div>
        )
    }
}

export default CreateSelect
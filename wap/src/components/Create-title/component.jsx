import React,{Component} from 'react';
import styles from './component.css'

class CreateTitle extends Component{
    constructor(){
        super();
        this.state = {
            titleTxt:''
        }
        this.changeTitle = this.changeTitle.bind(this);
    }
    changeTitle(e){
        this.setState({
            titleTxt: e.target.value
        },function(){
            this.props.titleCallback(this.state.titleTxt);
        })
    }
    render(){
        return (
            <div>
                <input className={styles.createTitle} type="text" onChange={this.changeTitle} value={this.state.titleTxt} placeholder="标题..."/>
            </div>
        )
       
    }
}

export default CreateTitle;
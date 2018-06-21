import React,{Component} from 'react';
import styles from './component.css';

class CreateContent extends Component{
    constructor(){
        super();
        this.contentChange = this.contentChange.bind(this);
        this.state = {
            contentTxt: ''
        }
    }
    contentChange(e){
        this.setState({
            contentTxt: e.target.value
        },function(){
           
            this.props.contentCallback(this.state.contentTxt);
            
        })
    }
    render(){
        return (
            <div className={styles.createText}>
            <textarea placeholder="内容..." onChange={this.contentChange} value={this.state.contentTxt}></textarea>
        </div>
        )
    }
}

export default CreateContent;
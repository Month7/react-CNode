import React,{Component} from 'react';
import CreateHeader from '../components/Create-header/component';
import CreateTitle from '../components/Create-title/component';
import CreateSelect from '../components/Create-select/component';
import CreateContent from '../components/Create-content/component';

class Create extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            content: '',
            type: ''
        }
        this.contentCallback = this.contentCallback.bind(this);
        this.titleCallback = this.titleCallback.bind(this);
        this.typeCallback = this.typeCallback.bind(this);
    }
    typeCallback(type){
        this.setState({
            type: type
        })
    }
    titleCallback(title){
        this.setState({
            title: title
        })
    }
    contentCallback(content){
        this.setState({
            content: content
        })
    }
    render(){
        const { title,content,type } = this.state;
        return (
            <div>
                <CreateHeader content={content} title={title} type={type} />
                <CreateTitle titleCallback={this.titleCallback}/>
                <CreateSelect typeCallback={this.typeCallback}/>
                <CreateContent contentCallback={this.contentCallback}/>
            </div>
        )
    }
    
}

export default Create;
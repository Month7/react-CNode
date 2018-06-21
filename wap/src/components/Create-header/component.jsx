import React,{Component} from 'react';
import styles from './component.css';
import {$http} from '../../utils/util';
import {withRouter} from "react-router-dom";

class CreateHeader extends Component{
    constructor(){
        super();
        this.newArticle = this.newArticle.bind(this);
    }
    newArticle(){
        const { title,content,type } = this.props;
        const url = '/topics';
        const method = 'post';
        const success = () => {
            this.props.history.push(`/tab=${type}`);
        }
        const data = {
            accesstoken: sessionStorage.getItem('accesstoken'),
            title: title,
            tab: type,
            content: content
        }
        $http(url,method,success,data);
    }
    render(){
        return (
            <div className={styles.createHeader}>
                发布
                <span className={styles.send} onClick={this.newArticle}><i className="glyphicon glyphicon-send"></i></span>
            </div>
        )
    }
}

export default withRouter(CreateHeader);
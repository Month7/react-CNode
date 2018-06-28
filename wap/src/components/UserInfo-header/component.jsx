import React,{Component} from 'react';
import styles from './component.css';
import backgroundImg from '../../res/userinfoBg.jpg';
import { filterTime } from '../../utils/util'

class UserInfoHeader extends Component{
    constructor(){
        super();
        this.goBack = this.goBack.bind(this);
    }
    goBack(){
        window.history.back(-1); 
    }
    render(){
        let { avatar_url,loginname,create_at,score,recent_topics,recent_replies } = this.props;
        return (
            <div>
                <div className={styles.userHeader}>
                    <span>个人资料</span>
                    <span className={styles.back} onClick={this.goBack}><i className="glyphicon glyphicon-chevron-left"></i></span>
                </div>
                <div className={styles.ss}>
                    <div>
                        <img className={styles.userImage} src={backgroundImg} />
                    </div>
                    <div className={styles.userPortrait}>
                        <img src={avatar_url} alt="404?"/>
                    </div>
                    <div className={styles.userName}>
                    {loginname}
                    </div>
                    <div className={styles.userScore}>
                        <div>积分:{score}</div>
                        <div>创建时间:{ filterTime(create_at) }</div>
                    </div>
                </div>
            </div>
            
        )
    }
   
}

export default UserInfoHeader;
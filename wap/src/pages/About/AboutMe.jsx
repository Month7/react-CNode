import React from 'react';
import CHeader from '../../components/CHeader/CHeader';
import styles from './AboutMe.css';

const AboutMe = () => {
    return (
        <div className={styles.aboutContent}>
            <CHeader />
            <div style={{
                margin:'0 1.5rem'
            }}>
                <h3>这是什么?</h3>
                <p>CNode社区,我的React练手项目</p>
                <p>GITHUB地址 :
                    <a className={styles.aboutLink} href="https://github.com/Month7/react-CNode">  https://github.com/Month7/react-CNode</a>
                </p>
                <p>第一个React项目,错误和BUG很多,请指正。</p>
                <h3>技术栈</h3>
                <p>React.js + ReactRouter + css Module + axios</p>
                <h3>我是谁</h3>
                <p>一个前端萌新,正在努力学习ing</p>
                <p>我的GITHUB :
                    <a className={styles.aboutLink} href="https://github.com/Month7">  https://github.com/Month7</a>
                </p>
                <p>我的简历 :
                    <a className={styles.aboutLink} href="https://Month7.github.io">  https://Month7.github.io</a>
                </p>
                <p>我是2019级应届生,正在网易 杭州研究院实习,同时也在寻找新的机会,如果对我有兴趣,可以通过邮件联系我,谢谢。</p>
            </div>
            
        </div>
    )
}

export default AboutMe;
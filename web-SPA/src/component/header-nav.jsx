import React,{Component} from 'react';
import cnodejsSvg from '../cnodejs_light.svg';
import {
    Link 
} from 'react-router-dom'

const headerNav = () => {
           return (
                <div className="App-header">
                    <div className="App-header-box">
                        <div className="header-left">
                            <Link to="/">
                            <img src={cnodejsSvg} className="App-logo" alt="logo" />
                            </Link>
                            <input className="search" type="text"/>
                        </div>
                        <ul className="header-right">
                            <li>
                                <Link to="/test">测试</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            )
}


export default headerNav;
import React,{Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import HeaderNav from './component/header-nav.jsx';
import Test from './component/Test';
import Indexa from './pages/Index';
import Article from './component/article';
import Login from './pages/login';
import UserList from './pages/userlist';

const RootRouter = () => (
    <BrowserRouter>
        <div className="App">
            <HeaderNav />
            <Switch>
                <Route exact path="/" component={Indexa} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/topic/:id" component={Article} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/user/:loginname" component={UserList} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default RootRouter;
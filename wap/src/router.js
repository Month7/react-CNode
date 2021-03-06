import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Index from './pages/Index';
import Message from './pages/Message';
import CFooter from './components/CFooter/CFooter';
import Login from './components/Login/Login';
import Article from './components/Article/Article'
import NotFoundPage from './pages/NotFoundPage';
import Create from './pages/Create';
import UserInfo from './pages/UserInfo';
import AboutMe from './pages/About/AboutMe';

const RootRouter = () => {
    return (
        <BrowserRouter basename="/">
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Index}></Route>
                    <Route path="/tab=:tab" component={Index}></Route>
                    <Route path="/message" render={() => (sessionStorage.getItem('accesstoken') === null ? (<Redirect to="/login"/>) : (<Message/>))} />
                    <Route path="/topic/:id" component={Article}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/me" render={() => (sessionStorage.getItem('accesstoken') === null ? (<Redirect to="/login"/>) : (<UserInfo/>))}></Route>
                    <Route path="/user/:loginname" component={UserInfo}></Route>
                    <Route path="/create" render={() => (sessionStorage.getItem('accesstoken') === null ? (<Redirect to="/login"/>) : (<Create/>))} />
                    <Route path="/about" component={AboutMe}></Route>
                    <Route path="*" component={NotFoundPage}></Route>
                    <CFooter />
                </Switch>
                <CFooter />
            </div>
        </BrowserRouter>
    )
}

export default RootRouter;
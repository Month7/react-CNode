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

const RootRouter = () => {
    var loggedIn = sessionStorage.getItem('accesstoken');
    
    return (
        <BrowserRouter basename="/">
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Index}></Route>
                    <Route path="/tab=:tab" component={Index}></Route>
                    <Route path="/message" render={() => (loggedIn === null ? (<Redirect to="/login"/>) : (<Message/>))} />
                    {/* <Route path="/message" component={Message} /> */}
                    <Route path="/topic/:id" component={Article}></Route>
                    <Route path="/login" component={Login}></Route>
                    <CFooter />
                </Switch>
                <CFooter />
            </div>
        </BrowserRouter>
    )
}

export default RootRouter;
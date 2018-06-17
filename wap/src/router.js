import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Index from './pages/Index';
import Message from './pages/Message';
import CFooter from './components/CFooter/CFooter';
import Article from './components/Article/Article';

const RootRouter = () => {
    return (
        <HashRouter>
            <div className="App">
                <Switch>
                    <Route exact strict path="/" component={Index}></Route>
                    <Route exact strict path="/:tab" component={Index}></Route>
                    <Route exact strict path="/message" component={Message}></Route>
                    <Route exact strict path="/topic/:id" component={Article}></Route>
                </Switch>
                <CFooter />
            </div>
        </HashRouter>
    )
}

export default RootRouter;
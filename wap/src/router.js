import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
    IndexRoute
} from 'react-router-dom';
import Postlists from './pages/PostLists';
import Postlist from './components/Postlist/component';

const RootRouter = () => {
    return (
        <HashRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Postlists}>
                        {/* <Route exact path="/test" component={Postlist}></Route> */}
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    )
}

export default RootRouter;
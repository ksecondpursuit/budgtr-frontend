import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';
import NewPage from './pages/NewPage';
import ShowPage from './pages/ShowPage';
import EditPage from './pages/EditPage';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/new" component={NewPage} />
                <Route path="/transactions/:id" exact component={ShowPage} />
                <Route path="/transactions/:id/edit" component={EditPage} />
            </Switch>
        </Router>
    );
}

export default App;

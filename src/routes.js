import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import ClassList from './Components/ClassList';
import Student from './Components/Student';

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/classlist/:class" component={ClassList} />
                <Route path="/student/:id" component={Student} />
            </Switch>
        );
    }
}

export default Routes;
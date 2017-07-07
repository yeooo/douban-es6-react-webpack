import React from 'react';
import ReactDOM from 'react-dom';
// 引入React-Router模块
import { Router,Route,IndexRoute,hashHistory } from 'react-router';


import MyIndex from '../views/home';
import MyMovie from '../views/Movie';
import MyBook from '../views/book';
import MyNetwork from '../views/network';
import MyGroup from '../views/group';

const RouterList = () => (
    <Router history={hashHistory}>
        <Route path="/" component = {MyIndex}>
            <IndexRoute  component = {MyIndex} />
            <Route path="/home" component = {MyIndex} />
            <Route path="/movie" component = {MyMovie} />
            <Route path="/book" component = {MyBook} />
            <Route path="/network" component = {MyNetwork} />
            <Route path="/group" component = {MyGroup} />
        </Route>
    </Router>
)

export default RouterList
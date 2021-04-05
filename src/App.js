import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './component/Nav/Nav';
import TodoList from './pages/TodoListPage';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
import Cookies from 'universal-cookie';

const App = () => {
    const [isAthenticated, setIsAthenticated] = useState(false);
    const [username, setUsername] = useState('');

    const cookie = new Cookies();

    useEffect(() => {
        const authCookie = cookie.get('token');
        authCookie ? authHandler() : logoutHandler();
    }, []);
    const authHandler = () => {
        setIsAthenticated(true);
    };
    const logoutHandler = () => {
        setIsAthenticated(false);
        cookie.remove('token');
    };

    return (
        <div>
            <Nav
                username={username}
                logoutHandler={logoutHandler}
                isAthenticated={isAthenticated}
            />
            <div id="title">TODO-LIST</div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/auth">
                    <AuthPage
                        isAthenticated={isAthenticated}
                        authHandler={authHandler}
                    />
                </Route>
                <ProtectedRoute auth={isAthenticated} path="/todolist">
                    <TodoList setUsername={setUsername} />
                </ProtectedRoute>
            </Switch>
        </div>
    );
};
export default App;

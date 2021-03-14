import React , {Component}from 'react';
import {Route , Switch} from 'react-router-dom';
import Nav from './component/Nav/Nav';
import TodoList from './pages/TodoListPage';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import './App.css';
class App extends Component{

 
    
    render(){
        return(
            <div>
                <Nav/>
                <div id="title">TODO-LIST</div>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/auth" component={AuthPage}/>
                  <Route path="/todolist"component={TodoList}/>
                </Switch> 
            </div>
        )
    }
}

export default App;
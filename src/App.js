import React , {Component}from 'react';
import './App.css';
import InputPart from './component/InputPart';
import Show from './component/show';
class App extends Component{

    state = { todos: []};

    OnAddSubmit = (data)=>{
        this.setState({todos: [...this.state.todos , data]});
    }
    
    render(){
        return(
            <div>
                <div id="title">TODO-LIST</div>
                <InputPart onsubmit={this.OnAddSubmit}/>
                <Show  todo = {this.state.todos}/>
            </div>
        )
    }
}

export default App;
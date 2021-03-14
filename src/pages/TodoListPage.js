import React from 'react';
import InputPart from '../component/TodoListApp/InputPart';
import Show from '../component/TodoListApp/show';

class TodoListPage extends React.Component{
    state = { todos: []};

    OnAddSubmit = (data)=>{
        this.setState({todos: [...this.state.todos , data]});
    }
    render(){
        return(
            <div>
                <InputPart onsubmit={this.OnAddSubmit}/>
                    <Show  todo = {this.state.todos}/>
             </div>
        )
    }
}

export default TodoListPage;
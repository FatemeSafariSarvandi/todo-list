import React from 'react';
import InputPart from '../component/TodoListApp/InputPart';
import Show from '../component/TodoListApp/show';

class TodoListPage extends React.Component {
  state = {
    todos: [], 
    filteredTodos: [], 
    selectedOption: 'all'
  };
  componentDidUpdate(prevProps , prevState , snapShot){
    if(prevState.todos !== this.state.todos||prevState.selectedOption !== this.state.selectedOption){
      this.filterOptionHandeler()
    }
  }

  filterOptionHandeler=()=>{
    switch (this.state.selectedOption) {
      case 'completed':
        this.setState({
          filteredTodos:this.state.todos.filter(
            (item)=> item.check === true
            )
          })
        break;
      case 'Not completed':
        this.setState({
          filteredTodos:this.state.todos.filter(
            (item)=> item.check === false
            )
          })
        break;
      default:
        this.setState({filteredTodos : this.state.todos})
        break;
    }
  }

  onFilterChange = (option)=>{
    this.setState({selectedOption : option})
  }

  OnAddSubmit = (data) => {
    this.setState ({todos: data});
  };
  render () {
    return (
      <div>
        <InputPart 
          selectedFilter = {this.state.selectedOption} 
          todos = {this.state.todos}
          onFilterChange={this.onFilterChange} 
          onsubmit={this.OnAddSubmit} 
        />
        <Show 
          setTodos={this.OnAddSubmit}
          todos={this.state.todos} 
          filteredTodos={this.state.filteredTodos} 
        />
      </div>
    );
  }
}

export default TodoListPage;

import React from 'react';
import InputPart from '../component/TodoListApp/InputPart';
import Show from '../component/TodoListApp/show';
import Cookies from 'universal-cookie';
import axios from 'axios';
class TodoListPage extends React.Component {
    state = {
        todos: [],
        filteredTodos: [],
        selectedOption: 'all',
    };
    cookies = new Cookies();
    token = this.cookies.get('token');

    componentDidMount = async () => {
        try {
            const userData = await axios.get(
                'http://localhost:8000/api/v1/users/me/',
                {
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                    },
                }
            );
            this.props.setUsername(userData.data.data.doc.username);
            this.getTodos();
        } catch (error) {
            console.log(error.response);
        }
    };

    getTodos = async () => {
        const userTodos = await axios.get(
            'http://localhost:8000/api/v1/todos/',
            {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            }
        );
        this.OnAddSubmit(userTodos.data.todos);
    };
    componentDidUpdate(prevProps, prevState, snapShot) {
        if (
            prevState.todos !== this.state.todos ||
            prevState.selectedOption !== this.state.selectedOption
        ) {
            this.filterOptionHandeler();
        }
    }

    filterOptionHandeler = () => {
        switch (this.state.selectedOption) {
            case 'completed':
                this.setState({
                    filteredTodos: this.state.todos.filter(
                        (item) => item.isChecked === true
                    ),
                });
                break;
            case 'Not completed':
                this.setState({
                    filteredTodos: this.state.todos.filter(
                        (item) => item.isChecked === false
                    ),
                });
                break;
            default:
                this.setState({ filteredTodos: this.state.todos });
                break;
        }
    };

    onFilterChange = (option) => {
        this.setState({ selectedOption: option });
    };

    OnAddSubmit = (data) => {
        this.setState({ todos: data });
    };
    render() {
        return (
            <div>
                <InputPart
                    token={this.token}
                    selectedFilter={this.state.selectedOption}
                    todos={this.state.todos}
                    onFilterChange={this.onFilterChange}
                    onsubmit={this.OnAddSubmit}
                />
                <Show
                    token={this.token}
                    setTodos={this.OnAddSubmit}
                    todos={this.state.todos}
                    filteredTodos={this.state.filteredTodos}
                />
            </div>
        );
    }
}

export default TodoListPage;

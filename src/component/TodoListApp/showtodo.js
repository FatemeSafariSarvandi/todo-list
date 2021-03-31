import axios from 'axios';
import React, { Component } from 'react';
import './index.css';
import address from '../../address/address';
class Showtodo extends Component {
    //eventHandler
    deleteHandeler = async () => {
        try {
            const deleteTodoData = await axios.delete(
                address + `/todos/${this.props.todo._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${this.props.token}`,
                    },
                }
            );
            this.props.setTodos(
                this.props.todos.filter((el) => el._id !== this.props.todo._id)
            );
        } catch (err) {
            return alert(err.response);
        }
    };
    completeHandeler = async () => {
        try {
            const checkItemData = await axios.patch(
                address + `/todos/${this.props.todo._id}`,
                { isChecked: !this.props.todo.isChecked },
                {
                    headers: {
                        Authorization: `Bearer ${this.props.token}`,
                    },
                }
            );

            this.props.setTodos(
                this.props.todos.map((item) => {
                    if (item._id === this.props.todo._id) {
                        return {
                            ...item,
                            isChecked: !item.isChecked,
                        };
                    }
                    return item;
                })
            );
        } catch (err) {
            return alert(err.response);
        }
    };

    render() {
        //console.log(this.props.todo);
        return (
            <div className="todoBox">
                <span
                    className={`todo ${
                        this.props.todo.isChecked ? 'completed' : ''
                    }`}
                >
                    {this.props.todo.description}
                </span>
                <button onClick={this.completeHandeler}>
                    <i className="far fa-check-square check"></i>
                </button>
                <button onClick={this.deleteHandeler}>
                    <i className="fas fa-trash-alt trash"></i>
                </button>
            </div>
        );
    }
}

export default Showtodo;

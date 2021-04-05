import axios from 'axios';
import React, { Component } from 'react';
import './index.css';
import address from '../../address/address';
//  for rename    todoData:todo
const Showtodo = ({ token, todos, setTodos, todo }) => {
    const deleteHandeler = async () => {
        try {
            const deleteTodoData = await axios.delete(
                `${address}/todos/${todo._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setTodos(todos.filter((el) => el._id !== todo._id));
        } catch (err) {
            return alert(err.response);
        }
    };
    const completeHandeler = async () => {
        try {
            const checkItemData = await axios.patch(
                `${address}/todos/${todo._id}`,
                { isChecked: !todo.isChecked },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setTodos(
                todos.map((item) => {
                    if (item._id === todo._id) {
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
    return (
        <div className="todoBox">
            <span className={`todo ${todo.isChecked ? 'completed' : ''}`}>
                {todo.description}
            </span>
            <button onClick={completeHandeler}>
                <i className="far fa-check-square check"></i>
            </button>
            <button onClick={deleteHandeler}>
                <i className="fas fa-trash-alt trash"></i>
            </button>
        </div>
    );
};

export default Showtodo;

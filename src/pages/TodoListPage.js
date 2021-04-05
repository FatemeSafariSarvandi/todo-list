import React, { useEffect, useState } from 'react';
import InputPart from '../component/TodoListApp/InputPart';
import Show from '../component/TodoListApp/show';
import Cookies from 'universal-cookie';
import axios from 'axios';
import address from '../address/address';

const TodoListPage = ({ setUsername }) => {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [selectedOption, setSelectedOption] = useState('all');

    const cookies = new Cookies();
    const token = cookies.get('token');

    useEffect(async () => {
        try {
            const userData = await axios.get(`${address}/users/me/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUsername(userData.data.data.doc.username);

            getTodos();
        } catch (error) {
            console.log(error.response);
        }
    }, []);

    useEffect(() => {
        filterOptionHandeler();
    }, [todos]);

    useEffect(() => {
        filterOptionHandeler();
    }, [selectedOption]);

    const getTodos = async () => {
        const userTodos = await axios.get(
            'http://localhost:8000/api/v1/todos/',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        OnAddSubmit(userTodos.data.todos);
    };

    const filterOptionHandeler = () => {
        switch (selectedOption) {
            case 'completed':
                setFilteredTodos(
                    todos.filter((item) => item.isChecked === true)
                );
                break;
            case 'Not completed':
                setFilteredTodos(
                    todos.filter((item) => item.isChecked === false)
                );
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };
    const onFilterChange = (option) => {
        setSelectedOption(option);
    };

    const OnAddSubmit = (data) => {
        setTodos(data);
    };
    return (
        <div>
            <InputPart
                token={token}
                selectedFilter={selectedOption}
                todos={todos}
                onFilterChange={onFilterChange}
                onsubmit={OnAddSubmit}
            />
            <Show
                token={token}
                setTodos={OnAddSubmit}
                todos={todos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
};

export default TodoListPage;

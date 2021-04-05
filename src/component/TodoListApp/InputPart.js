import axios from 'axios';
import React, { Component, useState } from 'react';
import address from '../../address/address';
import './index.css';

const InputPart = ({
    token,
    selectedFilter,
    todos,
    onFilterChange,
    onsubmit,
}) => {
    const [inputTerm, setInputTerm] = useState('');
    const onfilterCahngefunction = (e) => {
        onFilterChange(e.target.value);
    };
    const onInputChange = (e) => {
        setInputTerm(e.target.value);
    };
    const formsubmitHandler = async (e) => {
        e.preventDefault();
        if (inputTerm === '') {
            console.log('empty');
        }
        try {
            const addingTodoData = await axios.post(
                `${address}/todos`,
                {
                    name: 'todo',
                    description: inputTerm,
                    isChecked: false,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            onsubmit([
                ...todos,
                {
                    description: inputTerm,
                    isChecked: false,
                    _id: addingTodoData.data.data._id,
                },
            ]);
            setInputTerm('');
        } catch (err) {
            console.log(err.response);
        }
    };
    return (
        <div className="input-container">
            <form onSubmit={formsubmitHandler} className="input-form">
                <label htmlFor="inpt"></label>
                <input
                    type="text"
                    name="inpt"
                    value={inputTerm}
                    onChange={(e) => setInputTerm(e.target.value)}
                    placeholder="Enter a new task to do"
                />
                <button type="submit">
                    <i className="fas fa-plus"></i>
                </button>
                <select
                    value={selectedFilter}
                    onChange={onfilterCahngefunction}
                >
                    <option>All</option>
                    <option>completed</option>
                    <option>Not completed</option>
                </select>
            </form>
        </div>
    );
};

export default InputPart;

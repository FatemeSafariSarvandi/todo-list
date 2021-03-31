import axios from 'axios';
import React, { Component } from 'react';
import address from '../../address/address';
import './index.css';

class InputPart extends Component {
    state = { inputTerm: '' };

    onfilterCahnge = (e) => {
        this.props.onFilterChange(e.target.value);
    };
    onInputChange = (e) => {
        this.setState({ inputTerm: e.target.value });
    };
    formsubmitHandler = async (e) => {
        e.preventDefault();
        if (this.state.inputTerm === '') {
            console.log('empty');
        }
        try {
            const addingTodoData = await axios.post(
                address + '/todos',
                {
                    name: 'todo',
                    description: this.state.inputTerm,
                    isChecked: false,
                },
                {
                    headers: {
                        Authorization: `Bearer ${this.props.token}`,
                    },
                }
            );
            this.props.onsubmit([
                ...this.props.todos,
                {
                    description: this.state.inputTerm,
                    isChecked: false,
                    _id: addingTodoData.data.data._id,
                },
            ]);
            this.setState({ inputTerm: '' });
        } catch (err) {
            console.log(err.response);
        }
    };

    render() {
        return (
            <div className="input-container">
                <form onSubmit={this.formsubmitHandler} className="input-form">
                    <label htmlFor="inpt"></label>
                    <input
                        type="text"
                        name="inpt"
                        value={this.state.inputTerm}
                        onChange={(e) =>
                            this.setState({ inputTerm: e.target.value })
                        }
                        placeholder="Enter a new task to do"
                    />
                    <button type="submit">
                        <i className="fas fa-plus"></i>
                    </button>
                    <select
                        value={this.props.selectedFilter}
                        onChange={this.onfilterCahnge}
                    >
                        <option>All</option>
                        <option>completed</option>
                        <option>Not completed</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default InputPart;

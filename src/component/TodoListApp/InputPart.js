import React , {Component}from 'react';
import './index.css';

class InputPart extends Component{

    state = {inputTerm:''};

    onfilterCahnge =(e)=>{
        this.props.onFilterChange(e.target.value);
    }
    onInputChange = (e) =>{
        this.setState({inputTerm : e.target.value});
    }
    formsubmitHandler=(e)=>{
        e.preventDefault();
        if(this.state.inputTerm === ""){
            console.log("empty");
        }
        this.props.onsubmit([
        ...this.props.todos,
        {
            todotext : this.state.inputTerm ,
            check : false ,
            id: Math.random()*100,
        }]);
        this.setState({inputTerm: ''}); 
    };

    render(){
        return(
            <div className="input-container">
                <form 
                    onSubmit={this.formsubmitHandler}
                    className="input-form"
                >
                    <label htmlFor="inpt"></label>
                    <input type="text" 
                        name="inpt"
                        value={this.state.inputTerm}
                        onChange={(e)=>
                            this.setState({inputTerm:e.target.value})
                        }
                        placeholder="Enter a new task to do"
                    />
                    <button type='submit'><i className="fas fa-plus"></i></button>
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
        )
    }
}

export default InputPart;
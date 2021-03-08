import React , {Component}from 'react';
import './index.css';

class InputPart extends Component{

    //state = {inputTerm:''};

    render(){
        return(
            <div className="input-container">
                <form 
                    className="input-form"
                >
                    <label htmlFor="inpt"></label>
                    <input type="text" 
                        name="inpt"
                        // value={this.state.inputTerm}
                        // onChange={(e)=>
                        //     this.setState({inputTerm:e.target.value})
                        // }
                        placeholder="Enter a new task to do"
                    />
                    <button type='submit'><i class="fas fa-plus"></i></button>
                </form>
            </div>
        )
    }
}

export default InputPart;
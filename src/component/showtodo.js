import React , {Component}from 'react';
import './index.css';
class Showtodo extends Component{

    render(){
        console.log(this.props.todo);
        return(
            <div className="todoBox">
                <span className="todo">
                    {this.props.work}
                </span>
                <span><i className="far fa-check-square check"></i></span>
                <span><i className="fas fa-trash-alt trash"></i></span>
            </div>
            
        )
    }
}

export default Showtodo;
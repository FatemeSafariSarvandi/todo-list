import React , {Component}from 'react';
import './index.css';
class Showtodo extends Component{
    //eventHandler
    deleteHandeler = () =>{
        this.props.setTodos(
            this.props.todos.filter(
                (el)=> el.id !== this.props.todo.id
            )
        );
    };
    completeHandeler = ()=>{
        this.props.setTodos(
            this.props.todos.map((item)=>{
                if(item.id === this.props.todo.id){
                    return {
                        ...item, check : !item.check,
                    };
                } 
                return item;
            })
        );
    };

    render(){
        //console.log(this.props.todo);
        return(
            <div className="todoBox">
                <span className="todo" 
                    className={`todo ${
                    this.props.todo.check  ? 'completed' : '' 
                    }`}
                >
                    {this.props.todo.todotext}
                    {/* {this.props.work} */}
                </span>
                <button
                    onClick={this.completeHandeler}
                ><i className="far fa-check-square check"></i></button>
                <button
                    onClick={this.deleteHandeler}
                ><i className="fas fa-trash-alt trash"></i></button>
            </div>
            
        )
    }
}

export default Showtodo;
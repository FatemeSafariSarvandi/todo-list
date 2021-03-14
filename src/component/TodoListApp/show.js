import React , {Component}from 'react';
import Showtodo from './showtodo';
class Show extends Component{

    render(){
        console.log(this.props.todo);
        return(
            <div>
                 {this.props.todo.map((i)=>{
                    return( 
                        <Showtodo
                            work ={i.todotext}
                            check = {i.check}
                            key={i.id}
                      />
              )
          })}
            </div>
        )
    }
}

export default Show;
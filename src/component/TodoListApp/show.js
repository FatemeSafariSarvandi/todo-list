import React , {Component}from 'react';
import Showtodo from './showtodo';
class Show extends Component{

    render(){
        const{filteredTodos , setTodos , todos} = this.props;
        return(
            <div>
                 {filteredTodos.map((i)=>{
                    return( 
                        <Showtodo
                            todos={todos}
                            setTodos={setTodos}
                            todo={i}
                            // work ={i.todotext}
                            // check = {i.check}
                            key={i.id}
                      />
              )
          })}
            </div>
        )
    }
}

export default Show;
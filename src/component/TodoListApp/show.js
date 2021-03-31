import React, { Component } from 'react';
import Showtodo from './showtodo';
class Show extends Component {
    render() {
        const { filteredTodos, setTodos, todos } = this.props;
        return (
            <div>
                {filteredTodos.map((i) => {
                    return (
                        <Showtodo
                            token={this.props.token}
                            todos={todos}
                            setTodos={setTodos}
                            todo={i}
                            // description ={i.description}
                            // isChecked = {i.isChecked}
                            key={i._id}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Show;

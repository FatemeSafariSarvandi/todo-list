import React, { Component } from 'react';
import Showtodo from './showtodo';
const Show = ({ token, setTodos, todos, filteredTodos }) => {
    return (
        <div>
            {filteredTodos.map((i) => {
                return (
                    <Showtodo
                        token={token}
                        todos={todos}
                        setTodos={setTodos}
                        todo={i}
                        key={i._id}
                    />
                );
            })}
        </div>
    );
};
export default Show;

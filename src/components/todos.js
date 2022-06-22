import { Todo } from "./todo";
import React from "react";
export const Todos = ({todos, toggleTodo}) => {
    return (
      <div className="todos" data-testid="todos-div">
         {todos.map(todo => <Todo {...todo} toggleTodo={toggleTodo} />)}
      </div>
      )
  }
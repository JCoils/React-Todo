// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js



import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete} 
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};
/* this is the structure of the things in the todo list such as 
 "get food", and "Eat".
*/

export default TodoList;
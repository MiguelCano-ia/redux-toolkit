import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {

  // const { data: todos = [], isLoading } = useGetTodosQuery({});
  const [ todo, setTodo ] = useState(1);
  const { data, isLoading } = useGetTodoQuery( todo );

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: { isLoading ? 'True': 'False' }</h4>

      <pre>{ JSON.stringify( data ) }</pre>

      {/* <ul>
        {
          todos.map( todo => (
            <li key={ todo.id }>
              <strong> { todo.completed ? 'DONE' : 'Pending'} </strong>
              { todo.title }
            </li>
          ))
        }
      </ul> */}

      <button onClick={ () => setTodo( todo - 1 ) }>
        Previous Todo
      </button>
      <button onClick={ () => setTodo( todo + 1) } >
        Next Todo
      </button>
    </>
  )
}

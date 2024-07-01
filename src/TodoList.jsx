import React from 'react'
import { useEffect, useState } from 'react'
import HigherOrderFunction from './HigherOrderFunction';

const TodoList = ({data}) => {
    // const [todos, setTodos]= useState([]);
    // const [term, setTerm]=useState('');

    // useEffect(() => {

    //     const fetchTodos= async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    //         const json= await res.json();
    //         setTodos(json);
    //         console.log(json);
            
    //     };
    //     fetchTodos();
    // }, []);

    let renderTodos= data.slice(0,10)
    .map((todo) => {
        return (
            <div key={todo.id}>
                <p>
                    <p>userId {todo.userId}</p>
                    <strong>{todo.title}</strong>
                    <h6>{todo.completed ? 'Done': 'Working On it' }</h6>
                </p>
            </div>
        )
    })

// let FilterTodos= todos.slice(0,10)
// .filter(({title}) => {
//     return title.indexOf(term) >= 0;
// })
// .map((todos) => {
//     return (
//         <div key={todos.id}>
//             <p>
//                 <strong>{todos.title}</strong>
//             </p>
//         </div>
//     );
// })

 

  return (

    <div >
        <h1 style={{color:'green'}}>Todo List</h1>
        
        
         {renderTodos}
         
         </div>
  );
};

const SearchTodos= HigherOrderFunction(TodoList, "todos");

export default SearchTodos;
import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
//   const [todos, setTodos] = useState([]);
//   const [term, setTerm] = useState("");

//   useEffect(() => {
//     const fetchTodos = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const json = await res.json();
//       setTodos(json);
//     };
//     fetchTodos();
//   }, []);

  const renderTodos = data.map((todo) => {
    return (
      <div key={todo.id}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });

//   let filtereTdodos = todos
//     .filter(({ title }) => {
//       return title.indexOf(term) >= 0;
//     })
//     .map((todo) => {
//       return (
//         <div key={todo.id}>
//           <p>
//             <strong>{todo.title}</strong>
//           </p>
//         </div>
//       );
//     });
  return (
    <>
      <div>{renderTodos}</div>
    </>
  );
};

const SearchTodos = HOC( TodoList , 'todos');
export default SearchTodos;

import { useState } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./users";

// function App() {
//   const [query, setQuery] = useState("");

//   return (
//     <div className="app">
//       <input
//         type="text"
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <ul className="list">
//         {Users.filter((user) =>
//           user.first_name.toLowerCase().includes(query.toLowerCase())
//         ).map((user) => (
//           <li key={user.id} className="listItem">
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email","gender"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {<Table data={search(Users)}/>}
    </div>
  );
}

export default App;

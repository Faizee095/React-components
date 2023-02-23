import { useState , useEffect } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./users";
import axios from 'axios'

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

// function App() {
//   const [query, setQuery] = useState("");
//   const keys = ["first_name", "last_name", "email","gender"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
//     );
//   };

//   return (
//     <div className="app">
//       <input
//         type="text"
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       {<Table data={search(Users)}/>}
//     </div>
//   );
// }

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Table data={data} />}
    </div>
  );
}

export default App;

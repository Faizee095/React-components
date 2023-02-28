import "./App.css";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import SearchUsers from "./components/UserList";
import SearchTodos from "./components/TodoList";

function App() {
  return (
    <>
      <h2 style={{textAlign : 'center'}}>HOC</h2>
      <div className="App">
        <div className="section">
          <SearchUsers />
        </div>
        <div className="section">
          <SearchTodos />
        </div>
      </div>
    </>
  );
}

export default App;

import Home from "./components/Home";
import About from "./components/About/About";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import AboutUs from "./components/About/AboutUs";
import AboutTeam from "./components/About/AboutTeam";
import Users from "./components/Users/Users";
import UserDetails from "./components/Users/UserDetails";
import Admin from "./components/Admin/Admin";
import Login from "./components/Admin/Login";
import { AuthProvider } from "./components/Auth/Auth";
import RequireAuth from "./components/Auth/RequireAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* Nested Route  */}
          <Route path="about" element={<About />}>
            <Route path="us" element={<AboutUs />} />
            <Route path="team" element={<AboutTeam />} />
          </Route>
          {/* Page Not Found Route  */}
          <Route path="*" element={<PageNotFound />} />
          {/*Dynamic Route  */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          {/*Protected Route  */}
          <Route
            path="/admin"
            element={
              <RequireAuth>
                {" "}
                <Admin />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./features/auth/Home";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import Welcome from "./features/auth/Welcome";
import Profile from "./pages/content/Profile";
import Groups from "./pages/content/Groups";
import RequireAuth from "./features/auth/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="groups" element={<Groups />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

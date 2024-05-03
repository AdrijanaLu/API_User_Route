import './App.css';
import { Routes, Route } from "react-router-dom";
import APIUserHome from "./api_user/APIUserHome";
import APIUsers from "./api_user/APIUsers";
import APIUserDetail from "./api_user/APIUserDetail";
import APISearch from "./api_user/APISearch";
import Navbar from "./api_user/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<APIUserHome />} />
          <Route path="/users" element={<APIUsers />} />
          <Route path="/users/:username" element={<APIUserDetail />} />
          <Route path="/search" element={<APISearch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import { List } from "@mui/material";
import Order from "./pages/Orders/Order";

function App() {
  return (
    <>
      <Navbar />

      <hr />

      <div className="app-content">
        <Sidebar />

        <Routes>
          <Route path="/addItem" element={<Add />} />

          <Route path="/list" element={<List />} />

          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

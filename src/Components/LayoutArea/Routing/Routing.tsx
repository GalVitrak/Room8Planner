import Register from "../../AuthArea/Register/Register";
import Home from "../../HomeArea/Home/Home";
import "./Routing.css";
import { Navigate, Route, Routes } from "react-router-dom";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default Routing;

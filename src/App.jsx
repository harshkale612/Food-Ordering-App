import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app h-full w-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

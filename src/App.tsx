
import { Routes, Route,useLocation } from "react-router-dom";
import Navbar from "../src/component/Navbar"
import Dashboard from "../src/component/Dashboard";
import ProductList from "../src/component/ProductList";
import Clients from "../src/component/Client";
import Store from "../src/component/Store";
import Login from "./component/Login";

const App: React.FC = () => {
  const{pathname}=useLocation()

  return (
    <div className="container">
     {pathname!=="/"?<Navbar/>:null}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<ProductList limit={10} />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default App;
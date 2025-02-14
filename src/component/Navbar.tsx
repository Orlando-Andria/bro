// import { mangoFusionPaletteDark } from "@mui/x-charts";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navBar">
      <img src="./src/image/Logo.jpeg" alt="logo" className="Logo" />
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            flexDirection: "column",
            width: "20vw",
            padding: "0px",
          }}
        >
          <li className="li_nav">
            <img src="../src/image/dash.png" alt="" />
            <Link to="/" className="link_style">
              Dashboard
            </Link>
          </li>
          <li className="li_nav">
            <img src="../src/image/prod.png" alt="" />
            <Link to="/products" className="link_style">
              Products
            </Link>
          </li>
          <li className="li_nav">
            <img src="../src/image/client.png" alt="" />
            <Link to="/clients" className="link_style">
              Clients
            </Link>
          </li>
          <li className="li_nav">
            <img src="../src/image/store.png" alt="" />
            <Link to="/store" className="link_style">
              Store
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


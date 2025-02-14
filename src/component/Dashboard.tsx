import React from "react";
import Products from "../component/Products";
import BasicBars from "./barre/BarCharts";
import PieLabel from "./barre/bar2";
import SimpleChart from "./barre/bar3";
// import { Modal } from "./Navbar";
const Dashboard: React.FC = () => {
  return (
    <>
      <div className="dashboard">
        <div className="title-dash">
        <h1 className="h-1">Dashboard</h1>
        <p className="total">CA:12889M</p>
        </div>
        
        <div className="graphique">
          <BasicBars/>
          <PieLabel />
          <SimpleChart />
        </div>
        <h1>Liste de vente</h1>
        <div className="liste">
          <Products limit={4} hideTitle={true} />
        </div>

      </div>
    </>
  );
};

export default Dashboard;

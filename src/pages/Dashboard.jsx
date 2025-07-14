import React from "react";
import api from "../api";

export default function Dashboard() {
  const handleLogout = async () => {
    await api.get("/auth/logout");
    window.location.href = "/login";
  };

  return (
    <div className="container-fluid"  style={{marginLeft:'275%'}} >
      <div className=" text-center" >

      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>

      </div>
    </div>
  );
}

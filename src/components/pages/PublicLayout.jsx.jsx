import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from 'react-router-dom';

function PublicLayout() {
  return (
    <section className="public-layout h-full w-full flex flex-row">
      <Sidebar />
      <Outlet />
    </section>
  );
}

export default PublicLayout;

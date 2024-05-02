import React from "react";
import Content from "../Content";
import Sidebar from "../Sidebar";

function Home() {
  return (
    <section className="h-full w-full flex flex-row">
      <Sidebar />
      <Content />
    </section>
  );
}

export default Home;

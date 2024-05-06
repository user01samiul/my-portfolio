import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/Content.jsx";
import PublicLayout from "./components/pages/PublicLayout.jsx.jsx";

function App() {
  return (
    <Router>
      <main className="h-screen w-full">
        <Routes>
          <Route path="/my-portfolio/" element={<PublicLayout />}>
            <Route path="" element={<Content />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;

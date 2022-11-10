import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-l from-white to-slate-300 font-serif px-10">
      <Navbar />
      <main>
        <section>
          <Home />
        </section>
      </main>
    </div>
  );
}

export default App;

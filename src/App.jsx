import React from "react";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import MovieStream from "./pages/MovieStream";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Homepage />} path="/"></Route>
        <Route element={<MovieStream />} path="/moviestream/:id"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

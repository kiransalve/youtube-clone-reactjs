import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MovieList from "../components/MovieList";

const Homepage = () => {
  return (
    <>
      <Sidebar />
      <MovieList />
    </>
  );
};

export default Homepage;

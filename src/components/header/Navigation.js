import React from "react";
import { Link } from "react-router-dom";
import { FaQq } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav>
      <h1>
        <FaQq />
        <Link to="/">HolaNotes</Link>
      </h1>
    </nav>
  );
}

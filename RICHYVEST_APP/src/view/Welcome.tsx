// src/components/Welcome.tsx
import React from "react";
import { Link } from "react-router-dom";
import Title from "./components/Title";

const Welcome: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="mb-20">
      <Title />
    </div>
  </div>
);

export default Welcome;

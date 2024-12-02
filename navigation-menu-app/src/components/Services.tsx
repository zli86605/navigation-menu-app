import React from "react";
import { Routes, Route } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <div>
      <h1>Services Page</h1>
      <Routes>
        <Route path="design/ui" element={<div>UI Design</div>} />
        <Route path="design/ux" element={<div>UX Design</div>} />
        <Route
          path="development/frontend"
          element={<div>Frontend Development</div>}
        />
        <Route
          path="development/backend"
          element={<div>Backend Development</div>}
        />
      </Routes>
    </div>
  );
};

export default Services;

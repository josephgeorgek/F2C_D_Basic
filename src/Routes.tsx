import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ApplyCard = React.lazy(() => import("pages/ApplyCard"));
const ApplyCardOne = React.lazy(() => import("pages/ApplyCardOne"));
const BCCLandingCardHolder = React.lazy(
  () => import("pages/BCCLandingCardHolder"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/bcclandingcardholder"
            element={<BCCLandingCardHolder />}
          />
          <Route path="/applycardone" element={<ApplyCardOne />} />
          <Route path="/applycard" element={<ApplyCard />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

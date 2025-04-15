import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./Components/Footer";
import NotFound from "./pages/NotFound"; // 404 page component
import { ScrollTop } from "primereact/scrolltop";
import FadeContent from "./Components/Animation_Motion/FadedContent";
import { Helmet } from "react-helmet";

// Main app content with routing and layout control
function AppContent() {
  const location = useLocation(); // Get the current route path

  // Define valid route paths that should show Header, Sidebar, and Footer
  const validRoutes = ["/", "/projects", "/contact", "/services"];
  const isValidRoute = validRoutes.includes(location.pathname); // Check if current path is valid

  return (
    <>
      {/* SEO react helmet meta tags */}
      {/* you can use this helmet in each pages for indexing
          <meta name="robots" content="index, follow" />*/}
      <Helmet>
      </Helmet>

      {/* Show Header and Sidebar only for valid routes */}
      {isValidRoute && <Header />}
      {isValidRoute && <Sidebar />}

      {/* Wrap the routed content in a fade animation */}
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        {/* Scroll to top button */}
        <ScrollTop className="w-[50px] h-[50px] bg-red-500 border-[1px] border-white rounded-full text-white" />

        {/* Route definitions */}
        <Routes>
          {/* These routes render corresponding pages */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />

          {/* Catch-all route for undefined paths (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FadeContent>

      {/* Show Footer only for valid routes */}
      {isValidRoute && <Footer />}
    </>
  );
}

// Main App component that wraps everything
export default function App() {
  return (
    // Optional suspense fallback while components load (e.g., lazy loading support)
    <React.Suspense fallback={<div>Loading...</div>}>
      <AppContent />
    </React.Suspense>
  );
}

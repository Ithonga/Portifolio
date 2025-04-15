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
        <title>Ronnie Ithonga</title>
        <meta
          name="description"
          content="Ronnie is a passionate Frontend Developer specializing in React, React Native, SEO, and Graphics Design. I build stunning, high-performance websites and mobile apps that deliver exceptional user experiences. Lets turn your ideas into powerful digital solutions!"
        />
        <meta
          name="keywords"
          content="Web Developer Nairobi, Web Developer Kikuyu, Frontend Developer, React, React Native, UI/UX Design, SEO, Graphics Design, Mobile App Development, Web Development, High-Performance Websites, User Experience, Digital Solutions"
        />
        <meta name="author" content="Ronnie" />

        {/* index → Ask search engines to include this page in their search results.
            follow → Ask them to follow all the links on this page and potentially index those linked pages too. */}
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://ronnieithonga.com" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Ronnie Ithonga | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Stunning websites and apps using React, React Native, UI/UX & SEO."
        />
        <meta property="og:url" content="https://ronnieithonga.com" />
        <meta
          property="og:image"
          content="https://ronnieithonga.com/android-chrome-512x512.png"
        />

        {/* JSON-LD Structured Data SCHEMA MARKUP improves visibility in search engines */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ronnie",
            "jobTitle": "Frontend Developer",
            "url": "https://ronnieithonga.com",
            "image": "https://ronnieithonga.com/android-chrome-512x512.png",
            "description": "Ronnie is a passionate Frontend Developer specializing in React, React Native, UI/UX Design, SEO, and Graphics Design.",
            "sameAs": [
              "https://www.instagram.com/_ronni.e.e/",
              "https://github.com/Ithonga",
              "https://www.tiktok.com/@ronni.e.e?_t=ZM-8uu2H5FsRBG&_r=1"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance / Self-employed"
            },
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "IBM Full Stack Developer Program (Coursera)"
            },
            "knowsAbout": [
              "React", "React Native", "UI/UX Design", "SEO", "Graphics Design", "Corel"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "KE"
            }
          }
          `}
        </script>
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

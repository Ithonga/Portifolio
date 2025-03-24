import React, { useEffect } from "react";
import ErrorPage from '../pages/ErrorPage';
function Skills() {

  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <div>
   <ErrorPage />
   </div>
  );
}

export default Skills;

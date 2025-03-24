import React, { useEffect } from 'react'
import ErrorPage from '../pages/ErrorPage'
function Projects() {

  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=''>
      <ErrorPage />
    </div>
  )
}

export default Projects
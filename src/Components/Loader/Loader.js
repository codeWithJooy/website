import React, { useState, useEffect } from "react";
import "./Loader.css"; // Assuming you have the Loader component CSS file

const Loader = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Hide the loader after 1 second
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {showLoader && (
        <div className="loader">
          <div className="square"></div>
        </div>
      )}

      {!showLoader && children}
    </div>
  );
};

export default Loader;
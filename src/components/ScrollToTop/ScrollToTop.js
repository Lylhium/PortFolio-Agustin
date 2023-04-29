import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollToTop.css";
import { useState, useEffect } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <div
          className={`scroll-to-top ${showButton ? "" : "hidden"}`}
          onClick={handleClick}
        >
          <FaArrowCircleUp />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;

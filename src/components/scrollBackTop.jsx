import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling animation
    });
};

return (
    <button onClick={scrollToTop} className="scroll-to-top-button">
        <ArrowUpOutlined />
    </button>
  );
};

export default ScrollToTopButton;







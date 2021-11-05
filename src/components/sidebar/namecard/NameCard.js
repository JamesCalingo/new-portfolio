import React from "react";
import { useMediaQuery } from "react-responsive";
import "./namecard.css";

function NameCard() {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <a href={isSmallScreen ? "#mobile-menu" : "/"}>
      <div className="nameCard">
        <div className="name">JAMES CALINGO;</div>
        <div className="tagline">SOFTWARE ENGINEER;</div>
      </div>
    </a>
  );
}

export default NameCard;

import React from "react";
import { useMediaQuery } from "react-responsive";
import "./namecard.css";

function NameCard() {
 ;

  function flip() {
    return Math.round(Math.random());
  }

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <a href={isSmallScreen ? "#mobile-menu" : "/"}>
      <div className="nameCard">
        <div className="name">JAMES CALINGO;</div>
        <div className="tagline">SOFTWARE DEVELOPER;</div>
      </div>
    </a>
  );
}

export default NameCard;

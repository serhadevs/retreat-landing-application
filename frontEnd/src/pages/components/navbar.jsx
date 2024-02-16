import serha_logo from "../assets/images/logos/serha_logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const width = window.innerWidth;
  const [show, setShow] = useState(true);
  const showNavbar = () => {
    if(show==false){
      setShow(true);
    }else{
      setShow(false);
    }
    console.log("click");
  };

  useEffect(() => {
    if(window.innerWidth<1250){
      setShow(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1250) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  }, [width]);

  return (
    <div className="header">
      <div className="nav-image">
        <img src={serha_logo} alt="" className="nav-logo" />
      </div>

      <div
        className="nav-menu"
        id="nav-menu"
        style={{ display: show ? "block" : "none" }}
      >
        <ul className="nav-links">
          <li>
            <a href="#agenda">Welcome & Agenda</a>
          </li>
          <li>
            <a href="#venue_information">Venue Information</a>
          </li>
          <li>
            <a href="#guest_speaker">Guest Speaker</a>
          </li>
          <li>
            <a href="#previous_retreats">Previous Retreats</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
        </ul>
      </div>
      <div className="nav-hamburger">
        <div className="nav-hamburger-svg" onClick={showNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        <div className="nav-x-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

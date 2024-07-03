import React from "react";
import { Link } from "react-router-dom";
import { PiPersonSimpleHikeFill } from "react-icons/pi";
import { GiCampingTent } from "react-icons/gi";
import './main.css';

function Main() {
  return (
    <>
    <div class="btns" >
    <Link to='/login' >
          <button class="btn" >  
          login
          </button>
      </Link>
      <Link to='/signup' >
          <button class="btn" >
          signup
          </button>
      </Link>
    </div>

    
    <h1 style={{fontFamily: "revert-layer", textAlign:"center", color: "GrayText"}}>
        Adventure Planner
      </h1>
      <h5 style={{fontFamily: "cursive", textAlign: "center"}}>
        <PiPersonSimpleHikeFill />
        "plan your adventure with us"
        <GiCampingTent />
      </h5>

      <video id="vdo" controls autoPlay >
        <source src="/video/himalaya.webm" alt="/video/himalaya.mp4" />
      </video>
    </>
  );
}

export default Main;

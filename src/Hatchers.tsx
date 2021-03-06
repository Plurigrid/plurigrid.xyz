import React from "react";
import { useNavigate } from "react-router";
import { CTAButton } from "./CTAButton";
import { Header } from "./Header";

function Hatchers() {
  let navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="whitepaper-like">
        <h1>Hatchers simulation</h1>
        <p className="intro">Run a simulation and get your own Hatchers NFT</p>
        <CTAButton title="Begin simulation" onClick={() => {
            navigate("/hatchers/begin")
        }} />
      </div>
    </div>
  )
}

export default Hatchers;
import React from "react";
import homeBackground from "../Images/dotahomebg.png";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBackground})`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#444",
          fontWeight: "bolder",
          fontFamily: "cursive",
          fontSize: 60,
          marginTop: 0,
          alignItems: "center",
          height: 200,
        }}
      >
        Home
      </h1>
    </div>
  );
}

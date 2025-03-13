import React, { useState } from "react";
import { useEffect } from "react";
// taking 2 steps, one is to store the color, the other is the type of color

function RandomColors() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#f15025");
  // f15025

  function randomColorUtility(length) {
    // i will floor this
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    // length will be less than 6 || starting from 0
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor(); // Corrected function
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);
  
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Colors
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "30px",
          marginTop: "30px",
          flexDirection: "column",
          gap: "4px",
        }}
      >
          
          <h3>{ typeOfColor === 'rgb' ?'RGB Color' : 'HEX Color'}</h3>
        <h1>{ color}</h1>
      </div>
    </div>
  );
}

export default RandomColors;

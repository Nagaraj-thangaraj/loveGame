import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MoodIcon from "@mui/icons-material/Mood";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

const Love = () => {
  const [position, setPosition] = useState({ x: 110, y: 230 }); // Initial position
  const [message, setMessage] = useState("");
  const handleMove = () => {
    const container = document.getElementById("container");
    const containerRect = container.getBoundingClientRect();
    const newX = Math.max(
      0,
      Math.min(containerRect.width - 160, Math.random() * containerRect.width)
    );
    const newY = Math.max(
      0,
      Math.min(containerRect.height - 150, Math.random() * containerRect.height)
    );

    setPosition({ x: newX, y: newY });
  };
  return (
    <div className="bg-opacity">
      <div
        id="container"
        className="box"
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
          border: "1px solid black",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 className="question"> Do You Love Me !?</h1>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                marginLeft: "20px",
                fontWeight: "bold",
                bgcolor: "#F47DBB",
              }}
              onClick={() => alert("I Love You Too 🤗")}
            >
              😘 YES
            </Button>
            <Button
              variant="contained"
              sx={{
                marginLeft: "20px",
                fontWeight: "bold",
                bgcolor: "#F47DBB",
              }}
              style={{
                position: "absolute",
                left: `${position.x}px`,
                top: `${position.y}px`,
              }}
              onClick={handleMove}
            >
              😑 NO
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Love;

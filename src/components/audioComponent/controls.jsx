import React from "react";
import "./controls.css";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import SkipPreviousTwoToneIcon from "@mui/icons-material/SkipPreviousTwoTone";
import SkipNextTwoToneIcon from "@mui/icons-material/SkipNextTwoTone";
import PauseTwoToneIcon from "@mui/icons-material/PauseTwoTone";

function Controls({ isPlaying, setIsPlaying, handleNext, handlePrev }) {
  return (
    <div className="controls-wrapper flex">
      <div className="action-btn" onClick={handlePrev}>
        <SkipPreviousTwoToneIcon fontSize="medium" />
      </div>
      <div
        className="action-play-pause"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {!isPlaying ? <PlayArrowTwoToneIcon /> : <PauseTwoToneIcon />}
      </div>
      <div className="action-btn" onClick={handleNext}>
        <SkipNextTwoToneIcon fontSize="medium" />
      </div>
    </div>
  );
}

export default Controls;

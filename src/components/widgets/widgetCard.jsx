import React from "react";
import "./widgetCard.css";
import WidgetEntry from "./widgetEntry";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function WidgetCard({ title, similar, featured, newRelease }) {
  return (
    <div className="widgetcard-body">
      <p className="widget-title">{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : null}

      <div className="widget-fade">
        <div className="fade-button"></div>
        <KeyboardArrowRightIcon />
      </div>
    </div>
  );
}

export default WidgetCard;

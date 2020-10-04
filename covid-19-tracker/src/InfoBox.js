import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
import React from "react";

function InfoBox({ title, cases, isRed, total, active, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infobox ${active && "infobox--select"} ${
        isRed && "infobox--red"
      }`}
    >
      <CardContent>
        <Typography className="infobox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infobox__cases ${!isRed && "infobox__cases--green"}`}>
          {cases}
        </h2>
        <Typography className="infobox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;

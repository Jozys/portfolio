import { Button, useTheme } from "@mui/material";
import React from "react";

export default function TimelineButton(props: {
  title: string;
  onClick: () => void;
}) {
  const theme = useTheme();
  return (
    <div
      style={{
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.onClick}
      >
        {props.title}
      </Button>
    </div>
  );
}

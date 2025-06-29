import { Button, useTheme } from "@mui/material";
import React from "react";

export default function TimelineButton(props: {
  title: string;
  icon?: React.ReactNode;
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
        startIcon={props.icon}
        variant="contained"
        color="primary"
        onClick={() => props.onClick()}
      >
        {props.title}
      </Button>
    </div>
  );
}

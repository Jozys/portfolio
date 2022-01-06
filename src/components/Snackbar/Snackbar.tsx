import { Snackbar as UISnackbar } from "@material-ui/core/";
import { Alert } from "@material-ui/lab";
import React, { Component } from "react";

type Severity = "error" | "info" | "success" | "warning";

export interface SnackbarProps {
  message: string;
  open: boolean;
  onClose: () => void;
  severity: Severity;
  style?: React.CSSProperties;
}

export default function Snackbar(props: SnackbarProps) {
  const { onClose, severity, style } = props;

  return (
    <UISnackbar
      autoHideDuration={6000}
      style={{
        padding: 15,
        ...style,
      }}
      {...props}
    >
      <Alert elevation={6} onClose={onClose} severity={severity}>
        {props.message}
      </Alert>
    </UISnackbar>
  );
}

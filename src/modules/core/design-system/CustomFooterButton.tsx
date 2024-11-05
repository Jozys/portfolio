import { Button, ButtonProps, styled, Theme } from "@mui/material";
import React from "react";

const Root = styled(Button)(({ theme }: { theme: Theme }) => ({
  height: "5vh",
  fontSize: "1.65vh",
  width: "25%",
  color: "#fff",
  textTransform: "none",
}));

export interface CustomButtonProps extends ButtonProps {
  text: string;
}

export default function CustomFooterButton(props: CustomButtonProps) {
  return <Root {...props}> {props.text} </Root>;
}

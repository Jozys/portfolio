import { Button, ButtonProps, styled } from "@mui/material";

const Root = styled(Button)(() => ({
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

import React from "react";
import { styled, Typography } from "@mui/material";
import { Warning } from "@mui/icons-material";
import { useLanguage } from "../../../language/hooks";

const classes = {
  warning: "warning",
  warningIcon: "warningIcon",
  text: "text",
};

const StyledEmptyPage = styled("div")(({ theme }) => ({
  [`& .${classes.warning}`]: {
    height: window.innerHeight * 0.5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  [`& .${classes.warningIcon}`]: {
    alignSelf: "center",
    color: theme.palette.secondary.main,
  },
  [`& .${classes.text}`]: {
    marginLeft: 10,
    fontSize: "6vmin",
    color: theme.palette.secondary.main,
  },
}));

export default function EmptyPage() {
  const { language } = useLanguage();
  return (
    <StyledEmptyPage>
      <div className={classes.warning}>
        <Warning fontSize="large" className={classes.warningIcon} />
        <Typography className={classes.text}>
          404 | {language.notFound.title}
        </Typography>
      </div>
    </StyledEmptyPage>
  );
}

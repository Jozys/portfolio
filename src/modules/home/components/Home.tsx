import { styled } from "@mui/material";
import React from "react";
import Header from "../../core/components/Header";
import { useLanguage } from "../../../language/hooks";
import HomeTimeline from "./HomeTimeline";

const PREFIX = "Home";

const classes = {
  container: `${PREFIX}-container`,
  header: `${PREFIX}-header`,
  div: `${PREFIX}-div`,
};

const StyledHome = styled("div")(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  [`& .${classes.header}`]: {
    flex: 10,
  },
}));

export default function Home() {
  const { language } = useLanguage();
  return (
    <StyledHome className={classes.container}>
      <div className={classes.header}>
        <Header
          title={`${language.home.greeting}\n${language.home.name}`}
          subTitle={language.home.subtitle}
          showAvatar
        />
      </div>

      <HomeTimeline />
    </StyledHome>
  );
}

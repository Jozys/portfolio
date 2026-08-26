import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ThemeProvider,
  ShellBar,
  Card,
  CardHeader,
  Title,
  Text,
  Button,
  FlexBox,
  FlexBoxDirection,
  FlexBoxWrap,
  Tag,
  Avatar,
  Link,
  Bar,
} from "@ui5/webcomponents-react";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import "@ui5/webcomponents-icons/dist/nav-back.js";
import "@ui5/webcomponents/dist/generated/json-imports/Themes.js";
import "@ui5/webcomponents-theming/dist/generated/json-imports/Themes.js";
import { useLanguage } from "../../../language/hooks";
import {
  getAllProjects,
  getProjectTitle,
  getProjectDescription,
  getLabel,
} from "../../../data/Projects";
import { Technology, TechnologyType } from "../../../data/types/Project";
import { useThemeSwitch } from "../../../theme/hooks";

function getTagColorScheme(type: TechnologyType | undefined): string {
  switch (type) {
    case TechnologyType.Frontend:
      return "1";
    case TechnologyType.Backend:
      return "2";
    case TechnologyType.Database:
      return "3";
    case TechnologyType.DevOps:
      return "4";
    default:
      return "5";
  }
}

export default function UI5ShowcaseRoot() {
  return (
    <ThemeProvider>
      <UI5Showcase />
    </ThemeProvider>
  );
}

/**
 * Secret feature: the portfolio rebuilt with genuine Open UI5 (Fiori "Horizon")
 * web components. Reachable via the hidden "/ui5" route (triggered by rapidly
 * clicking the home logo). Self-contained — the regular MUI shell is hidden on
 * this route. Content is reused from the shared data layer to stay DRY.
 */
export function UI5Showcase() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { isThemeDark } = useThemeSwitch();

  const applyUI5Theme = (isDark: boolean) => {
    setTheme(isDark ? "sap_horizon_dark" : "sap_horizon");
  };

  React.useEffect(() => {
    applyUI5Theme(isThemeDark);

    return () => {
      setTheme("sap_horizon");
    };
  }, [isThemeDark]);

  const goHome = () => navigate("/home");
  const projects = getAllProjects();

  return (
    <>
      <FlexBox
        direction={FlexBoxDirection.Column}
        style={{
          minHeight: "100vh",
          background: "var(--sapBackgroundColor)",
        }}
      >
        <ShellBar
          primaryTitle="Joshua Slaar"
          secondaryTitle={language.home.subtitle}
          profile={<Avatar initials="JS" />}
          startButton={
            <Button
              icon="nav-back"
              design="Transparent"
              onClick={goHome}
              accessibleName={language.ui5.backToPortfolio}
            />
          }
          onLogoClick={goHome}
        />

        <FlexBox
          direction={FlexBoxDirection.Column}
          style={{
            gap: "1rem",
            padding: "1.5rem",
            maxWidth: "72rem",
            width: "100%",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          <Text style={{ color: "var(--sapNeutralColor)" }}>
            {language.ui5.tagline}
          </Text>

          <Title level="H2">{language.home.me.title}</Title>
          <Card
            header={
              <CardHeader
                titleText={language.home.me.title}
                subtitleText={language.home.subtitle}
                avatar={<Avatar initials="JS" />}
              />
            }
          >
            <Text style={{ padding: "1rem", display: "block" }}>
              {language.home.me.description}
            </Text>
          </Card>

          <Title level="H2">{language.projects.main.title}</Title>
          <FlexBox wrap={FlexBoxWrap.Wrap} style={{ gap: "1rem" }}>
            {projects.map((project, index) => {
              const description = getProjectDescription(project, language);
              return (
                <Card
                  key={index}
                  style={{ width: "22rem", maxWidth: "100%" }}
                  header={
                    <CardHeader
                      titleText={getProjectTitle(project, language)}
                      subtitleText={project.years}
                    />
                  }
                >
                  <FlexBox
                    direction={FlexBoxDirection.Column}
                    style={{ gap: "0.75rem", padding: "1rem" }}
                  >
                    {typeof description === "string" && (
                      <Text>{description}</Text>
                    )}

                    <FlexBox wrap={FlexBoxWrap.Wrap} style={{ gap: "0.5rem" }}>
                      {project.technologies
                        .filter((tech): tech is Technology => Boolean(tech))
                        .map((tech, techIndex) => (
                          <Tag
                            onClick={() => {
                              if (!tech.link) return;
                              const w = window.open(
                                tech.link,
                                "_blank",
                                "noopener,noreferrer",
                              );
                              if (w) w.opener = null;
                            }}
                            key={techIndex}
                            style={{ cursor: "pointer" }}
                            colorScheme={getTagColorScheme(tech.type)}
                            design="Set1"
                          >
                            {tech.name}
                          </Tag>
                        ))}
                    </FlexBox>

                    <FlexBox wrap={FlexBoxWrap.Wrap} style={{ gap: "1rem" }}>
                      {Object.entries(project.links).map(([key, link]) => (
                        <Link
                          key={key}
                          href={link.url}
                          target={
                            link.disableOpenInNewTab ? undefined : "_blank"
                          }
                        >
                          {getLabel(link.label, language) || key}
                        </Link>
                      ))}
                    </FlexBox>
                  </FlexBox>
                </Card>
              );
            })}
          </FlexBox>
        </FlexBox>

        <Bar
          design="FloatingFooter"
          style={{ position: "sticky", bottom: "1rem", margin: "0 1rem 1rem" }}
          endContent={
            <Button design="Emphasized" icon="nav-back" onClick={goHome}>
              {language.ui5.backToPortfolio}
            </Button>
          }
        />
      </FlexBox>
    </>
  );
}

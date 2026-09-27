import React from "react";
import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import { Box, Link, SxProps, Theme, Typography, useTheme } from "@mui/material";

export interface FormattedTextProps {
  content: string;
  values?: Record<string, string | number>;
  paragraphSx?: SxProps<Theme>;
  linkSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
  inline?: boolean;
  className?: string;
}

export const FormattedText: React.FC<FormattedTextProps> = ({
  content,
  values,
  paragraphSx,
  linkSx,
  sx,
  inline = false,
  className,
}) => {
  const theme = useTheme();

  // Replace {{token}} placeholders
  let parsedContent = content;
  if (values) {
    for (const [key, val] of Object.entries(values)) {
      parsedContent = parsedContent.replaceAll(`{{${key}}}`, String(val));
    }
  }

  const overrides: MarkdownToJSX.Overrides = {
    strong: {
      component: ({
        children,
        style,
        className: strongClassName,
        ...props
      }: React.HTMLAttributes<HTMLElement>) => (
        <strong
          className={strongClassName}
          {...props}
          style={{
            color: theme.palette.text.primary,
            fontWeight: 700,
            ...style,
          }}
        >
          {children}
        </strong>
      ),
    },
    p: {
      component: ({
        children,
        className: pClassName,
        ...props
      }: React.HTMLAttributes<HTMLElement>) => (
        <Typography
          component="p"
          className={pClassName}
          {...props}
          sx={{
            fontSize: { xs: 15, sm: 16 },
            lineHeight: 1.75,
            color: theme.palette.text.secondary,
            mb: 2,
            "&:last-child": { mb: 0 },
            ...paragraphSx,
          }}
        >
          {children}
        </Typography>
      ),
    },
    span: {
      component: ({
        children,
        className: spanClassName,
        ...props
      }: React.HTMLAttributes<HTMLElement>) => (
        <Typography
          component="span"
          className={spanClassName}
          {...props}
          sx={{
            fontSize: { xs: 15, sm: 16 },
            lineHeight: 1.75,
            color: theme.palette.text.secondary,
            ...paragraphSx,
          }}
        >
          {children}
        </Typography>
      ),
    },
    a: {
      component: ({
        children,
        href,
        className: aClassName,
        ...props
      }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <Link
          href={href}
          className={aClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
          sx={{
            color: theme.palette.secondary.main,
            textDecoration: "none",
            fontWeight: 600,
            "&:hover": {
              textDecoration: "underline",
            },
            ...linkSx,
          }}
        >
          {children}
        </Link>
      ),
    },
  };

  return (
    <Box className={className} sx={sx}>
      <Markdown
        options={{
          forceBlock: !inline,
          forceInline: inline,
          overrides,
        }}
      >
        {parsedContent}
      </Markdown>
    </Box>
  );
};

export default FormattedText;

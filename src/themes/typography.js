/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

export default function themeTypography(theme) {
  return {
    fontFamily: theme?.customization?.fontFamily,
    h6: {
      fontWeight: 500,
      color: theme.heading,
      fontSize: "0.75rem",
    },
    h5: {
      fontSize: "0.875rem",
      color: theme.heading,
      fontWeight: 500,
    },
    h4: {
      fontSize: "1rem",
      color: theme.heading,
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem",
      color: theme.heading,
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      color: theme.heading,
      fontWeight: 700,
    },
    h1: {
      fontSize: "2.125rem",
      color: theme.heading,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: theme.textDark,
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      color: theme.darkTextSecondary,
    },
    caption: {
      fontSize: "0.75rem",
      color: theme.darkTextSecondary,
      fontWeight: 400,
    },
    body1: {
      fontWeight: 500,
      fontFamily: "Futura",
    },
    body2: {
      letterSpacing: "0em",
      fontWeight: 400,
      lineHeight: "1.5em",
      color: theme.darkTextPrimary,
    },
    button: {
      textTransform: "capitalize",
    },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      "& > label": {
        top: 23,
        left: 0,
        color: theme.grey500,
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      "& > div > input": {
        padding: "30.5px 14px 11.5px !important",
      },
      "& legend": {
        display: "none",
      },
      "& fieldset": {
        top: 0,
      },
    },
    mainContent: {
      width: "100%",
      // minHeight: "calc(100vh - 60px)",
      // flexGrow: 1,
    },
    menuCaption: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: theme.heading,
      padding: "6px",
      textTransform: "capitalize",
      marginTop: "10px",
    },
    subMenuCaption: {
      fontSize: "0.6875rem",
      fontWeight: 500,
      color: theme.darkTextSecondary,
      textTransform: "capitalize",
    },
    commonAvatar: {
      cursor: "pointer",
      borderRadius: "8px",
    },
    smallAvatar: {
      width: "22px",
      height: "22px",
      fontSize: "1rem",
    },
    mediumAvatar: {
      width: "34px",
      height: "34px",
      fontSize: "1.2rem",
    },
    largeAvatar: {
      width: "44px",
      height: "44px",
      fontSize: "1.5rem",
    },
    logo: {
      fontFamily: "Frijole",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: 28,
      background: "linear-gradient(0deg, #10E2F0 0%, #CFFCFF 100%)",
      backgroundClip: "text",
      textFillColor: "transparent",
    },
    lobbyLink: {
      color: "#fff",
      fontFamily: "Futura",
      fontSize: 28,
    },
    lobbyLinkFontFamily:  "Futura",
    
  };
}

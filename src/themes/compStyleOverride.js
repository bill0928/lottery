import { Popover } from "@mui/material";
import { min } from "lodash";

export default function componentStyleOverrides(theme) {
  const bgColor = theme.colors?.grey50;
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          "&:hover": {
            color: "#fff",
          },
          fontFamily: 'Futura',
        },
        contained:{
          color: "#000",
          borderRadius: 15,
          fontSize: 16,
          boxShadow: "0px -4px 2px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 2px 0px rgba(255, 255, 255, 0.60) inset;",
        }
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          // borderRadius: `${theme?.customization?.borderRadius}px`,
          borderRadius: 10,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.colors?.textDark,
          padding: "24px",
        },
        title: {
          fontSize: "1.125rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          paddingTop: "10px",
          paddingBottom: "10px",
          "&.Mui-selected": {
            color: theme.menuSelected,
            backgroundColor: theme.menuSelectedBack,
            "&:hover": {
              backgroundColor: theme.menuSelectedBack,
            },
            "& .MuiListItemIcon-root": {
              color: theme.menuSelected,
            },
          },
          "&:hover": {
            backgroundColor: theme.menuSelectedBack,
            color: theme.menuSelected,
            "& .MuiListItemIcon-root": {
              color: theme.menuSelected,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          minWidth: "36px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.textDark,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          "&::placeholder": {
            color: theme.darkTextSecondary,
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover, &.Mui-focused": {
            borderRadius: 15,
          },
        },
        input: {
          // background: theme.colors?.secondaryDark,
          padding: "11px 16px",
          borderRadius: 15,
          border: "0.5px solid rgba(255, 255, 255, 0.70)",
          boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.30) inset",
          color: "#FFF",
          fontFamily: 'Futura',
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          textAlign: "center",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors?.primaryDark,
          background: theme.colors?.primary200,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          // color: theme.paper,
          // background: theme.colors?.grey700,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: "#060317",
          
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          lobbyLink: "lobbyLink",
        },
      },
    },
  };
}

import { Theme } from "@mui/material";

export type CustTheme = Theme & { typography: { lobbyLinkFontFamily: string } }
export type CustThemeByShadow = Theme & { palette: { common: { shadow: string } } }
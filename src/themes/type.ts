import { Theme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    bet: Palette['primary'];
    bet2: Palette['primary'];
    bet3: Palette['primary'];
  }

  interface PaletteOptions {
    bet?: PaletteOptions['primary'];
    bet2?: PaletteOptions['primary'];
    bet3?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    bet: true;
    bet2: true;
    bet3: true;
  }
}
export type CustTheme = Theme & { typography: { lobbyLinkFontFamily: string } }
export type CustThemeByShadow = Theme & { palette: { common: { shadow: string } } }
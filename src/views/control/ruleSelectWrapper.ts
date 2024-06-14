import { styled, useTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { CustTheme } from '@/themes/type';
import { CommonThemePro, OcThemePro, OshemePro, WrhemePro } from "./types";


export const Wrapper = styled(Grid, {
  shouldForwardProp: (prop: string) =>
    prop !== "isOnlyOne" && prop !== "theme" && prop !== "isSection",
})(({ theme, isOnlyOne, isSection }: WrhemePro) => ({
  borderRadius: "10px",
  background: theme.palette.secondary.main,
  boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.40) inset",
  height: 28,
  padding: isOnlyOne ? "4px 8px" : "4px 8px 4px 16px",
  flexWrap: "nowrap",
  [theme.breakpoints.up("md")]: {
    cursor: isOnlyOne ? "default" : "pointer",
    width: isSection ? 128 : 160,
  },
  [theme.breakpoints.down("md")]: {
    width: isSection ? "25vw" : "40vw",
  },
}));
export const TxtWrapper = styled(Typography)(({ theme }:CommonThemePro) => ({
  [theme.breakpoints.up("md")]: {
    fontSize: 14,
    width: "85%",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
    width: "100%",
  },
  fontWeight: 700,
  fontFamily: theme.typography.lobbyLinkFontFamily,
  color: "#000",
}));
export const OptionsWrapper = styled(Grid, {
  shouldForwardProp: (prop: string) => prop !== "isStage" && prop !== "theme",
})(({ theme, isStage }: OshemePro) => ({
  [theme.breakpoints.up("md")]: {
    padding: "12px 16px",
    background: "#000",
    gap: 10,
    maxWidth: isStage ? 600 : 550,
  },
  [theme.breakpoints.down("md")]: {},
}));
const shouldForwardProp = (prop: string) =>
  prop !== "isSelect" && prop !== "theme";
export const OptionsContentWrapper = styled(Typography, { shouldForwardProp })(
  ({ theme, isSelect }: OcThemePro) => ({
    padding: "4px 16px",
    [theme.breakpoints.up("md")]: {
      cursor: "pointer",
      ["&:hover"]: isSelect
        ? {}
        : {
            borderColor: "#FFC555",
            color: "#FFC555",
          },
      width: 150,
    },
    [theme.breakpoints.down("md")]: {
      //   width: "27vw",
    },
    fontSize: 14,
    fontFamily: theme.typography.lobbyLinkFontFamily,
    borderRadius: 10,
    border: "1px solid",
    textAlign: "center",
    fontWeight: 400,
    background: isSelect ? "#FFC555" : "transparent",
    boxShadow: isSelect
      ? "0px 2px 2px 0px rgba(0, 0, 0, 0.30) inset"
      : undefined,
    color: isSelect ? "#000" : "white",
    borderColor: isSelect ? "#000" : "#FFF",
  })
);
export const AccordionWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100vw",
  top: 34,
  left: -6,
  zIndex: 1,
}));

export const StageTtileWrapper = styled(Typography)(({ theme }: CommonThemePro) => ({
  [theme.breakpoints.up("md")]: {
    fontSize: 14,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
  },
  fontWeight: 400,
  fontFamily: theme.typography.lobbyLinkFontFamily,
  color: "white",
  textAlign: "center",
}));

export const StageWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    gap: 5,
  },
  [theme.breakpoints.down("md")]: {},
  flexWrap: "nowrap",
}));

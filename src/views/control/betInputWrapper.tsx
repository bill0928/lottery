import { CustTheme } from "@/themes/type";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { pad } from "lodash";

type CommonThemePro = { theme: CustTheme };
export const Wrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '16px 20px',
    },
    [theme.breakpoints.down('md')]: {
        padding: '12px 23px',
        paddingBottom: 16,
       
    },
   
    color: 'white',
}));
export const TitleWrapper = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
       
    },
    [theme.breakpoints.down('md')]: {
    },
    fontSize: 12,
}));
export const TopWrapper = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginBottom: 12
    },
    [theme.breakpoints.down('md')]: {
        marginBottom: 8
    },
  
}));
export const AmountWrapper = styled(TextField)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
}));
export const SummaryTxtWrapper = styled(Grid)(({ theme }: CommonThemePro) => ({
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
    color: '#CCC',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    fontFamily: theme.typography.lobbyLinkFontFamily,
}));
export const SummaryWrapper = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
    color: '#10F0AD',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    margin:'0 4px',
}));

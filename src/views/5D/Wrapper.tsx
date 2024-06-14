import { Theme, styled } from '@mui/material/styles'
// material-ui
import { Box, Grid } from '@mui/material';
import { CustThemeByShadow } from '@/themes/type';

type ThemePro = { theme: CustThemeByShadow }
const backdropFilter = 'blur(4px)'
const Wrapper = styled('div')(({ theme }) => ({
    margin: '0 auto',
    height: '100%',
    [theme.breakpoints.up('md')]: {
        width: 1136,
    },
    [theme.breakpoints.down('md')]: {

    }
}));
export const MainWrapper = styled(Grid)(({ theme }: ThemePro) => ({
    background: theme.palette.common.black,
    boxShadow: theme.palette.common.shadow,
    backdropFilter,
    width: '100%',
    [theme.breakpoints.up("md")]: {
        height: 434,
        borderRadius: '0px 10px 10px 10px',
    },
    [theme.breakpoints.down("md")]: {
        height: '50vh',
    },
    color: 'white'
}));
export const RightWrapper = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        width: 286,
        gap: 4
    },
    [theme.breakpoints.down("md")]: {

    },
    color: 'white'
}));
export const RightTopWrapper = styled(Box)(({ theme }: ThemePro) => ({
    background: theme.palette.common.black,
    [theme.breakpoints.up("md")]: {
        height: 78,
        borderRadius: 10,
        boxShadow: theme.palette.common.shadow,
        backdropFilter,
    },
    [theme.breakpoints.down("md")]: {

    },
    color: 'white'
}));
export const RightBottomWrapper = styled(Box)(({ theme }: ThemePro) => ({
    background: theme.palette.common.black,
    [theme.breakpoints.up("md")]: {
        height: 396,
        borderRadius: 10,
        boxShadow: theme.palette.common.shadow,
        backdropFilter,
    },
    [theme.breakpoints.down("md")]: {

    },
    color: 'white'
}));
export const MobileBottomWrapper = styled(Box)(({ theme }: ThemePro) => ({
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.down("md")]: {
        position: 'fixed',
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.80)',
        boxShadow: theme.palette.common.shadow,
        backdropFilter,
        width: '100%',
    },
    height: '20vh',
    color: 'white'
}));
export const BetInputWrapper = styled(Box)(({ theme }) => ({
    background: theme.palette.common.black,
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.down("md")]: {

    },
}));

export default Wrapper;

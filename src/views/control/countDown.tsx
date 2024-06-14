
import { styled, useTheme } from '@mui/material/styles';
import { CustTheme } from '@/themes/type';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

const Wrapper = styled(Grid)(({ theme }) => ({
    // width: '100%',
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.down('md')]: {
    },

}));

const CountDown = () => {
    const theme = useTheme() as CustTheme;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const normalColor = '#CCCCCC'
    const secondColor = '#fff'
    const fontFamily = theme.typography.lobbyLinkFontFamily

    return (
        <>
            <Wrapper alignItems="center" >
                {!isMobile && <Typography variant='h5' sx={{ fontFamily, color: normalColor }}  >
                    2024-0606 14:00:00
                </Typography>}
                <Grid 
                mt={isMobile?0:1}
                container 
                alignItems={isMobile ?'baseline':'center'} 
                direction={isMobile ? 'column' : 'row'}>
                    <Typography variant='h5' sx={{ fontFamily, color: normalColor, fontSize: 12 }}>
                        投注剩余时间
                    </Typography>
                    <Typography variant='h5' ml={isMobile ? 0 : 1} sx={{ fontFamily, color: secondColor, fontSize: isMobile ? 16 : 24 }}>
                        00:46
                    </Typography>
                </Grid>
            </Wrapper>
        </>
    );
};

export default CountDown;
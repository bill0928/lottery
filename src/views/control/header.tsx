
import { styled, useTheme } from '@mui/material/styles';
import { CustTheme } from '@/themes/type';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Logo from '@/assets/images/logo/CQSSC.png';
import Image from 'next/image';
import CountDown from './countDown';

const Wrapper = styled(Grid)(({ theme }) => ({
    
    height: 88,
    borderRadius: 10,
    border: '1px solid #10E2F0',
    background: ' rgba(9, 0, 7, 0.40)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(4px)',

    [theme.breakpoints.up('md')]: {
        padding: '0px 32px',
        width: '100%',
    },
    [theme.breakpoints.down('md')]: {
        padding: '0 5px',
        margin: '0 8px',
        width: 'calc(100% - 16px)',
    },

}));
const BallWrapper = styled(Grid)(({ theme }) => ({
    borderRadius: '50%',
    boxShadow: '2px -4px 2px 0px rgba(0, 0, 0, 0.25) inset, -2px 4px 2px -1px rgba(255, 255, 255, 0.45) inset',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    color: '#fff',
    [theme.breakpoints.up('md')]: {
        width: 32,
        height: 32,
    },
    [theme.breakpoints.down('md')]: {
        width: 20,
        height: 20,
    },
}));
const parseColorBall = (num: number) => {
    const colors = ['#F26403', '#0B68E8', '#8B68F6', '#4EB538',
        '#525252', '#8D0102', '#F11B18', '#10E2F0', '#EBCD15', '#C5C5C5'
    ]
    return colors[num]
}
const Header = () => {
    const theme = useTheme() as CustTheme;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const flexs = isMobile ? [1.5, 1] : [1, 1]

    const renderLogo = () => {
        const size = isMobile ? 40 : 56;
        const titleCss = {
            color: '#fff',
            fontFamily: theme.typography.lobbyLinkFontFamily,
            fontSize: isMobile ? 16 : 20,
            fontWeight: 700
        }
        const periodCss = {
            color: '#ccc',
            fontFamily: theme.typography.lobbyLinkFontFamily,
            fontSize: 12,
            marginTop: isMobile ? 0 : 1,
        }

        return (<Grid container alignItems={'center'}   >
            <Image src={Logo} width={size} alt='' />
            <Grid ml={1} >
                <Typography sx={{ ...titleCss }}  >
                    时时彩
                </Typography>
                <Typography sx={{ ...periodCss }}>
                    0800-000-000 期
                </Typography>
            </Grid>
        </Grid>)
    }

    const renderLastPeriod = () => {
        const color = '#CCCCCC'
        const fontFamily = theme.typography.lobbyLinkFontFamily
        const css = isMobile ? { width: '100%' } : { flex: 1.2 }
        return <Grid container sx={{ ...css }} direction={isMobile ? 'row' : 'column'} gap={isMobile ? 0 : 1}>
            <Grid xs={isMobile ? 2 : undefined} >
                <Typography variant='subtitle1' sx={{ fontFamily, color, fontSize: 12, width: '100%' }}  >
                    {isMobile ? '上期开奖' : '第 0800-000-000 期'}
                </Typography>
            </Grid>
            <Grid xs={isMobile ? 10 : undefined} container >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) =>
                    <BallWrapper
                        alignItems={'center'}
                        key={index}
                        mr={1}
                        sx={{ backgroundColor: parseColorBall(item) }} >
                        <Typography
                            variant='subtitle1'
                            sx={{
                                textAlign: 'center',
                                fontFamily,
                                color: '#F5F5F5',
                                textShadow: '0px 2px 3px rgba(0, 0, 0, 0.40)',
                                fontSize: isMobile ? 12 : 18,
                                fontWeight: 700,
                            }}
                        >{item + 1}</Typography>
                    </BallWrapper>)}
            </Grid>
        </Grid>
    }
    return (
        <>
            <Wrapper container alignItems={'center'} justifyContent={'center'}
                sx={{}}>
                <Box sx={{ flex: flexs[0] }}> {renderLogo()}</Box>
                <Box sx={{ flex: flexs[1] }} ><CountDown /></Box>
                {renderLastPeriod()}
            </Wrapper>
        </>
    );
};

export default Header;
import { CustTheme } from "@/themes/type";
import { Box, Button, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {
    Wrapper, TitleWrapper, AmountWrapper,
    SummaryTxtWrapper, SummaryWrapper,
    TopWrapper
} from './betInputWrapper'
import HaoMaLanIcon from '../assets/images/hao_ma_lan.svg'

const BetInput = () => {
    const theme = useTheme() as CustTheme;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return <Wrapper >
        <TopWrapper container justifyContent={'space-between'} alignItems={'center'}>
            <TitleWrapper variant="body1">单注金额</TitleWrapper>
            {isMobile && <Grid>
                <Button variant="contained" color="bet3" sx={{ fontSize: 12, padding: '4px 12px' }}>
                    机选
                </Button></Grid>}
        </TopWrapper>
        <AmountWrapper id="outlined-basic" label="" />
        <Grid container justifyContent={'space-between'} width={1} mt={'8px'}>
            <SummaryTxtWrapper container xs={8} theme={theme}>
                已选<SummaryWrapper variant="body1">22</SummaryWrapper>注，共<SummaryWrapper variant="body1">44</SummaryWrapper>
            </SummaryTxtWrapper>
            <SummaryTxtWrapper container xs={4} theme={theme} justifyContent={'flex-end'}>
                单注最高盈利<SummaryWrapper variant="body1">22</SummaryWrapper>
            </SummaryTxtWrapper>
        </Grid>
        <Grid container width={1} mt={isMobile ? 1.5 : 2.5} gap={isMobile ? 1.25 : 1.5} flexWrap={'nowrap'}>
            <Grid item xs={6}><Button variant="contained" color="bet" sx={{ width: '100%' }}>
                直接投注
            </Button></Grid>
            <Grid item xs={6}><Button variant="contained" color="bet2" sx={{ width: '100%' }}>
                号码栏
            </Button>
            </Grid>
            {isMobile && <Button variant="contained" color="bet2" sx={{ padding: '10px', minWidth: 'unset' }}>
                <HaoMaLanIcon size={20} />
            </Button>}
        </Grid>
    </Wrapper>
}

export default BetInput;
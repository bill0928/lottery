// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, Grid, Stack, Theme, Typography, useMediaQuery } from '@mui/material';

// project imports
import Wrapper, {
  MainWrapper,
  RightWrapper, RightTopWrapper, RightBottomWrapper,
  MobileBottomWrapper
} from './Wrapper';
import { useAuth } from '@/state/auth/hooks';
import { CustTheme, CustThemeByShadow } from '@/themes/type';
import Header from '../control/header';
import GamePlayType from '../control/gamePlayType';
import { GAME_ID } from '../constant'
import { SSC_RULE_CODE } from './constant'
import { useState } from 'react';
// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Index = () => {
  const theme = useTheme() as CustThemeByShadow;
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [rule, set] = useState<number>(SSC_RULE_CODE.DING_WE_DAN)

  const renderBottom = () => {
    if (isMobile) {
      return <MobileBottomWrapper theme={theme}>bet input</MobileBottomWrapper>
    }
    return <Grid container gap={'4px'} mt={'4px'}>

    </Grid>
  }

  return (
    <>
      <Wrapper>
        <Header />
        <Grid container gap={'4px'} mt={1.3}>
          <Box width={isMobile ? 1 : undefined} >
            <GamePlayType game={GAME_ID.SSC_60} rule={rule} onChange={set} />
            <MainWrapper theme={theme} container alignItems={'center'} justifyContent={'center'}>main play</MainWrapper>
          </Box>
          {!isMobile && <RightWrapper container>
            <RightTopWrapper theme={theme} width={1} >user balance</RightTopWrapper>
            <RightBottomWrapper theme={theme} width={1} >list record</RightBottomWrapper>
          </RightWrapper>}
        </Grid>
        {renderBottom()}
      </Wrapper>
    </>
  );
};

export default Index;

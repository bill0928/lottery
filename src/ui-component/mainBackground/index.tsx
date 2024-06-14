// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';
// material-ui
import { useTheme } from '@mui/material/styles';
import {  useMediaQuery } from '@mui/material';

// project imports
import BackGroundWrapper from './BackGroundWrapper';
import Image from 'next/image'
import BgPc from '@/assets/images/BG.jpg';
import BgMobile from '@/assets/images/BG_mobile.jpg';
// assets


const Index = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return  <BackGroundWrapper ><Image fill src={matchDownSM? BgMobile:BgPc} alt=''  /></BackGroundWrapper>
      
};

export default Index;

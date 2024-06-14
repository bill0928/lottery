// import { Link } from 'react-router-dom';
import { useSnapshot } from 'valtio';
// import Link from 'next/link'
// material-ui
import { ButtonBase, Link, Typography, Box } from '@mui/material';

// project imports
import {config} from '../constant';
// import Logo from '@/ui-component/Logo2';
import app from '@/state/app/store'
import LogoIcon from '@/assets/images/icons/logo.svg';
// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const {actions, state} = app
  const {defaultId} = useSnapshot(state)
  
  return (
    <ButtonBase disableRipple 
      onClick={() => {
        console.log('logo click')
      }} 
      component={Link}
      to={config.defaultPath}>
          <LogoIcon />
        <Box component="span" sx={{  width: {xs: 0, md: 'auto'}, opacity:{xs: 0, md: 1}, marginLeft: {xs: 0, md: 1} } }>
        <Typography variant='logo'  >
          LottoRise
        </Typography>
        </Box>
    </ButtonBase>
  );
};

export default LogoSection;

// material-ui
import { styled } from '@mui/material/styles';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const BackGroundWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',

  zIndex: -1,
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
  [theme.breakpoints.down('md')]: {
    height: 'calc(100vh - 184px)',
    top: 0,
  }
}));

export default BackGroundWrapper;

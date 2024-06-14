
'use client'
// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Theme, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Header from './Header';
import app from '@/state/app/store'
// assets
import { PropsWithChildren } from 'react';
import { useSnapshot } from 'valtio';
import BackGroundWrapper from '@/ui-component/mainBackground';

type Props = {
  typography: {
    mainContent: {
      borderBottomLeftRadius: number;
      borderBottomRightRadius: number;
      transition: string;
      marginLeft: number;
      width: string;
      padding: string;
      marginRight: string;
    };
  }
} & Theme
// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'theme' }) (({ theme }: { theme: Props }) => ({
  ...theme.typography.mainContent,
  transition: theme.transitions.create(
    'margin',
    {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),
  [theme.breakpoints.up('md')]: {
    // marginLeft: open ? 0 : -(drawerWidth - 20),
    // marginLeft: open ? 0 : -(drawerWidth - 70),
    // width: `calc(100% - ${drawerWidth}px)`
    marginTop: '80px'
  },
  [theme.breakpoints.down('md')]: {
    // marginLeft: '20px',
    // width: `calc(100% - ${drawerWidth}px)`,
    // padding: '16px'
    marginTop: '60px'
  },
  [theme.breakpoints.down('sm')]: {
    // marginLeft: '10px',
    // width: `calc(100% - ${drawerWidth}px)`,
    // padding: '6px',
    // marginRight: '10px'
  }
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout:React.FC<PropsWithChildren>  = ({ children }) => {
  const theme = useTheme() as Props;
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const {actions, state} = app
  const {opened: leftDrawerOpened} = useSnapshot(state)
  const handleLeftDrawerToggle = () => {
    actions.setMenu(!leftDrawerOpened)
  };

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar >
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} window={undefined} /> */}
      <BackGroundWrapper />
      <Main theme={theme} >
      {children}
      </Main>
    </Box>
  );
};

export default MainLayout;

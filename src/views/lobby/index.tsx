// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid, Stack, Theme, Typography, useMediaQuery } from '@mui/material';

// project imports
import Wrapper from './Wrapper';
import Guest from './Guest';
import { useAuth } from '@/state/auth/hooks';
import { CustTheme } from '@/themes/type';
// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
  const { isLegal } = useAuth()
  const theme = useTheme() as CustTheme;
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Wrapper>
        <Grid container alignItems="center" justifyContent="center">
          {isLegal ? null : <Guest />}
        </Grid>
        {isLegal ? <Grid container alignItems="center" justifyContent={'center'}
          sx={{ background: 'rgba(0,0,0,0.7)', width: 150 }}>
          <Grid item >
            <Typography
              sx={{
                color: '#fff',
                fontSize: 28,
                fontFamily: theme.typography.lobbyLinkFontFamily,
              }}
              component={Link}
              href="/5D/5011" underline="hover">
              5D- 5011
            </Typography>
            {/* <Typography variant="mediumAvatar" component={Link} href="/5d" underline="hover">
            Futura
            </Typography> */}
          </Grid>
          {/* <Grid item >
            <Button size="large" variant="contained" color="secondary">
              K3
            </Button>
          </Grid>
          <Grid item >
            <Button size="large" variant="contained" color="secondary">
              WIN GO
            </Button>
          </Grid> */}
        </Grid> : null}
      </Wrapper>
    </>
  );
};

export default Login;

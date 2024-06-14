import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  useMediaQuery
} from '@mui/material';

import { Formik } from 'formik';

// project imports
import useScriptRef from '@/hooks/useScriptRef';
// import AnimateButton from '@/ui-component/extended/AnimateButton';

import { useAuth } from '@/state/auth/hooks'

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const { guest } = useAuth()

  return (
    <>
      <Formik
        initialValues={{
          submit: null
        }}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            guest()
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              // setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>

            <Box sx={{ }}>
              {/* <AnimateButton> */}
                <Button  disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Guest
                </Button>
              {/* </AnimateButton> */}
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;

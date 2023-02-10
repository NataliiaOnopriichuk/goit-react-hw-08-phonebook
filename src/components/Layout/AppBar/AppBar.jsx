import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { useDispatch, useSelector } from 'react-redux';
import { selectorAuth } from 'redux/selectors';
import { logoutUser } from 'redux/Auth/operation.auth';

function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const { token } = useSelector(selectorAuth);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar component="nav" disableGutters>
          <ContactPhoneIcon
            fontSize="large"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              color: '#7b9dc7',
            }}
          />
          <Box
            component="ul"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {token ? (
              <>
                <Button
                  component="li"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link to={routes.CONTACTS}>Contacts</Link>
                </Button>{' '}
                <Button
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                  component="li"
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    marginLeft: 'auto',
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  component="li"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link to={routes.REGISTER}>Register</Link>
                </Button>
                <Button
                  component="li"
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link to={routes.LOGIN}>Login</Link>
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

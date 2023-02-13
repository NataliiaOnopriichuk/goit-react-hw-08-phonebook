import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link } from 'react-router-dom';
import { routes } from 'utils/routes';
import { useSelector } from 'react-redux';
import { selectorAuth } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ThemeProvider } from '@emotion/react';
import { headerTheme } from './headerTheme';

export const Header = () => {
  const { token, user } = useSelector(selectorAuth);

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar component="nav" disableGutters>
            <ContactPhoneIcon
              fontSize="large"
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                color: '#95edff45',
              }}
            />
            <Box
              component="ul"
              sx={{
                flexGrow: 1,
                display: 'flex',
              }}
            >
              {token ? (
                <>
                  <Button
                    component="li"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <Link to={routes.CONTACTS}>Contacts</Link>
                  </Button>
                  <UserMenu email={user.email} />
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
    </ThemeProvider>
  );
};

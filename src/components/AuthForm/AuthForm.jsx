import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const AuthForm = ({ onSubmit, formTitle, authType }) => {
  const [form, setForm] = useState(
    authType === 'Register'
      ? { name: '', email: '', password: '' }
      : { email: '', password: '' }
  );

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          paddingTop: '90px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {formTitle}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {authType === 'Register' && (
              <Grid item xs={12}>
                <TextField
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={form.password}
                onChange={handleChange}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {formTitle}
          </Button>
          {authType === 'Register' && (
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  to="/login"
                  style={{ textDecoration: 'underline', fontSize: '14px' }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </Container>
  );
};

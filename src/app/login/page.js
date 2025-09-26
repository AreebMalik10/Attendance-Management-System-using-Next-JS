'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #e0f7fa 0%, #fff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          minWidth: 350,
          maxWidth: 400,
          textAlign: 'center',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={1}>
          Sign in with username
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
           Enter your credentials to access your account and manage attendance easily.
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          placeholder="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((show) => !show)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <Box sx={{ textAlign: 'right', mb: 2 }}>
          <Button variant="text" size="small">
            Forgot password?
          </Button>
        </Box> */}
        <Button
          fullWidth
          variant="contained"
        
          sx={{
            bgcolor: '#222',
            color: '#fff',
            py: 1.5,
            borderRadius: 2,
            fontWeight: 600,
            mb: 2,
            fontSize: 16,
            textTransform: 'none',
            '&:hover': { bgcolor: '#444' },
          }}
          onClick={() =>{
            console.log("login clicked");
            router.push("/dashboard")
          }}
        >
          Get Started
        </Button>
        
      </Paper>
    </Box>
  );
}
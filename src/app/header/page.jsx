'use client';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'

export default function Header() {
    const profileName = "Areeb";

    const handleLogout = () => {
        console.log("Logout");
    }
  return (
    <AppBar position='static' sx={{ backgroundColor: "#1e293b"}}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between"}}>
            <Typography variant="h6" component="div">AMS</Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2}}>
                <Typography variant="body1">{profileName}</Typography>
                <Button color="inherit" variant="outlined" onClick={handleLogout} sx={{ borderColor: "white", color: "white"}}>
                    Logout
                </Button>
            </Box>

        </Toolbar>

    </AppBar>
  )
}

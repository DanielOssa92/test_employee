import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Navbar = () => {
  return (
    <Box sx={{flexGrow:1}}>
        <AppBar sx={{boxShadow: "none",
          color: "black",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #bfb2b2",
          marginBottom: "30px",}}
          position="static">
            <Toolbar>
                <Typography variant='h6' component="div" sx={{flexGrow:1}}>
                    Hacker News
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar

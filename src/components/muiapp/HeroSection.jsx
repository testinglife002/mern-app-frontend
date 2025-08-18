// 📄 src/components/muiapp/HeroSection.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', height: '300px', mb: 4, overflow: 'hidden' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        {<source src="/give-thanks-mj.mp4" type="video/mp4" />}
        {/*<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />*/}

      </video>

      <Box sx={{
        position: 'relative',
        zIndex: 1,
        color: 'white',
        textAlign: 'center',
        p: 4,
        background: 'rgba(0, 0, 0, 0.4)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Typography variant="h3">Welcome to Your Dashboard</Typography>
        <Typography variant="h6">Everything you need in one place</Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;

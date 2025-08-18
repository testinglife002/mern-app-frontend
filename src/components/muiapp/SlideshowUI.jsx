// 📄 src/components/muiapp/SlideshowUI.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

const slides = [
  'https://cdn.wallpapersafari.com/47/81/GvPV8B.jpg',
  'https://images.hdqwalls.com/download/canyonlands-sunrise-4k-dn-1360x768.jpg',
  'https://thumbs.dreamstime.com/b/nature-thailand-rice-farm-44919269.jpg'
];

export default function SlideshowUI() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5">🎞 Working Slideshow</Typography>
      <Swiper
        modules={[Autoplay, Scrollbar]}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={20}
        scrollbar={{ draggable: true }}
        style={{ width: '100%', height: '200px', background: '#ddd' }}
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';

console.log("🎞 Slideshow loaded");

const horizontalSlides = [
   'https://cdn.wallpapersafari.com/47/81/GvPV8B.jpg',
   'https://images.hdqwalls.com/download/canyonlands-sunrise-4k-dn-1360x768.jpg',
   'https://thumbs.dreamstime.com/b/nature-thailand-rice-farm-44919269.jpg'
  // '/slides/slide1.jpg',
  // '/slides/slide2.jpg',
  // '/slides/slide3.jpg',
];

const verticalSlides = [
  '📢 Big update released!',
  '🔥 Hot deals this week!',
  '✅ System maintenance on Sunday',
];

export default function Slideshow() {

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <Box>
      <Box sx={{ flex: 3 }}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={20}
          style={{ width: '100%', height: '200px' }}
        >
          {horizontalSlides.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {<Box sx={{ flex: 1, background: '#f5f5f5', borderRadius: 2, p: 2 }}>
        <Typography variant="h6" gutterBottom>📣 Announcements</Typography>
        <Swiper
          direction="vertical"
          modules={[Autoplay, Scrollbar]}
          autoplay={{ delay: 2500 }}
          scrollbar={{ draggable: true }}
          loop
          style={{ height: '200px' }}
        >
          {verticalSlides.map((text, idx) => (
            <SwiperSlide key={idx}>
              <Typography variant="body1">{text}</Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>}
    </Box>
  );
}
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Collections } from "@mui/icons-material";
import { useState } from "react";
import NewYearSayPreview from "@/assets/img/project/new_year_say/new_year_say_preview.png";
import NewYearSayLanding from "@/assets/img/project/new_year_say/new_year_say_landing.png";
import NewYearSayFeature1 from "@/assets/img/project/new_year_say/new_year_say_feature_1.png";
import NewYearSayFeature2 from "@/assets/img/project/new_year_say/new_year_say_feature_2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  { src: NewYearSayLanding, alt: "Landing Page" },
  { src: NewYearSayFeature1, alt: "Features" },
  { src: NewYearSayFeature2, alt: "Decorate Card" },
];

export function NewYearSayPortfolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          cursor: "pointer",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "scale(1.05)",
            "& .overlay": {
              opacity: 1,
            },
          },
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
        }}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={NewYearSayPreview}
          width="100%"
          alt="New Year Say Preview"
          style={{ display: "block" }}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s ease",
            color: "#fff",
            gap: 1,
          }}
        >
          <Collections sx={{ fontSize: 40 }} />
          <Typography variant="subtitle1" fontWeight="bold">
            View Gallery
          </Typography>
        </Box>
      </Box>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>New Year Say (AI 덕담 제조기)</DialogTitle>
        <DialogContent>
          <Typography variant="body2" mb={2}>
            AI를 활용하여 받는 사람과 상황에 맞는 맞춤형 새해 덕담을 생성해주는
            서비스입니다.
          </Typography>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            style={{ paddingBottom: "30px" }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.alt}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    {slide.alt}
                  </Typography>
                  <Box
                    component="img"
                    src={slide.src}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                    alt={slide.alt}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </DialogContent>
      </Dialog>
    </>
  );
}

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Collections } from "@mui/icons-material";
import { useState } from "react";
import SupportConePreview from "@/assets/img/project/support_cone/support_cone_preview.png";
import SupportConePricing from "@/assets/img/project/support_cone/support_cone_pricing.png";
import SupportConeFeatures from "@/assets/img/project/support_cone/support_cone_features.png";
import SupportConeCreator from "@/assets/img/project/support_cone/support_cone_creator.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  { src: SupportConePreview, alt: "Landing Page" },
  { src: SupportConeFeatures, alt: "Features" },
  { src: SupportConePricing, alt: "Pricing" },
  { src: SupportConeCreator, alt: "Creator Profile" },
];

export function SupportConePortfolio() {
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
          src={SupportConePreview}
          width="100%"
          alt="Support Cone Preview"
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
        <DialogTitle>Support Cone</DialogTitle>
        <DialogContent>
          <Typography variant="body2" mb={2}>
            'Buy Me a Coffee', 'Ko-fi' 및 국내의 '도네리카노'와 비슷한 크리에이터 후원 서비스입니다.
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

import { Fragment, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Collections } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TSPPreview from "@/assets/img/work/tsp/tsp_preview.png";
import TSPDashboard from "@/assets/img/work/tsp/tsp_dashboard.png";
import TSPProject from "@/assets/img/work/tsp/tsp_project.png";
import TSPUser from "@/assets/img/work/tsp/tsp_user.png";
import TSPPayment from "@/assets/img/work/tsp/tsp_payment.png";
import TSPCredit from "@/assets/img/work/tsp/tsp_credit.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = {
  description: "",
  img: [
    {
      src: TSPDashboard,
      alt: "TSP Dashboard",
    },
    {
      src: TSPProject,
      alt: "TSP Project",
    },
    {
      src: TSPPreview,
      alt: "TSP Service",
    },
    {
      src: TSPUser,
      alt: "TSP User",
    },
    {
      src: TSPPayment,
      alt: "TSP Payment",
    },
    {
      src: TSPCredit,
      alt: "TSP Credit",
    },
  ],
};

export function TSPPortfolio() {
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
        <img src={TSPPreview} width="100%" alt="TSP" style={{ display: "block" }} />
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
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth="md">
        <DialogTitle>TSP</DialogTitle>
        <DialogContent>
          <Typography variant="body2" mb={2}>
            TSP는 복잡한 클라우드 인프라(Web, WAS, DB)를 클릭 몇 번으로 손쉽게 구축할
            수 있는 SaaS 플랫폼입니다. <br />
            멀티 테넌트 아키텍처를 통해 보안성을 확보했으며, 직관적인 포털을 통해
            서비스 생성부터 모니터링까지 편리하게 관리할 수 있습니다.
          </Typography>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
          >
            {" "}
            <Box p="16px">
              <Typography>{slides.description}</Typography>
            </Box>
            {slides.img.map((img) => (
              <Fragment key={img.alt}>
                <SwiperSlide>
                  <img src={img.src} width="100%" alt={img.alt} />
                </SwiperSlide>
              </Fragment>
            ))}
          </Swiper>
        </DialogContent>
      </Dialog>
    </>
  );
}

import { Fragment, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
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
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={TSPPreview}
          width="100%"
          onClick={() => setIsOpen(true)}
          alt="TSP"
        />
      </Box>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth="md">
        <DialogTitle>TSP</DialogTitle>
        <DialogContent>
          <Typography variant="body2" mb={2}>
            TSP는 클라우드 서비스 제공업체(CSP)의 Infrastructure as a
            Service(IaaS)를 활용하여 CSP의 서버를 통해 구성한 VM Pool을 기반으로
            웹 서버, 웹 애플리케이션 서버, 데이터베이스 서비스를 생성합니다.
            이때 사용자 간 보안 유지를 위해 멀티 테넌트 형태로 구성되며, TSP
            포털을 통해 편리한 운영 환경 및 서비스 관리가 가능합니다.
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

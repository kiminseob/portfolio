import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import JeusPreview from "@/assets/img/work/jeus/jeus_preview.png";
import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Jeus85Login from "@/assets/img/work/jeus/8.5/jeus8.5_login.png";
import Jeus85Home from "@/assets/img/work/jeus/8.5/jeus8.5_home.png";
import Jeus85Server from "@/assets/img/work/jeus/8.5/jeus8.5_server.png";
import Jeus85Domain from "@/assets/img/work/jeus/8.5/jeus8.5_domain.png";
import Jeus85AppInstall from "@/assets/img/work/jeus/8.5/jeus8.5_app_install.png";
import Jeus21Login from "@/assets/img/work/jeus/21/jeus21_login.png";
import Jeus21Server from "@/assets/img/work/jeus/21/jeus21_server.png";
import Jeus21Domain from "@/assets/img/work/jeus/21/jeus21_domain.png";
import Jeus9Home from "@/assets/img/work/jeus/9/jeus9_home.png";
import Jeus9Server from "@/assets/img/work/jeus/9/jeus9_server.png";
import Jeus9Domain from "@/assets/img/work/jeus/9/jeus9_domain.png";
import Jeus9AppInstall from "@/assets/img/work/jeus/9/jeus9_app_install.png";
import Jeus9History from "@/assets/img/work/jeus/9/jeus9_history.png";
import Jeus9MonitoringThread from "@/assets/img/work/jeus/9/jeus9_monitoring_thread.png";
import Jeus9Login from "@/assets/img/work/jeus/9/jeus9_login.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = {
  jeus9: {
    img: [
      {
        src: Jeus9Login,
        alt: "JEUS9 Login",
      },
      {
        src: Jeus9Home,
        alt: "JEUS9 Home",
      },
      {
        src: Jeus9Server,
        alt: "JEUS9 Server",
      },
      {
        src: Jeus9Domain,
        alt: "JEUS9 Domain",
      },
      {
        src: Jeus9AppInstall,
        alt: "JEUS9 App Install",
      },
      {
        src: Jeus9History,
        alt: "JEUS9 History",
      },
      {
        src: Jeus9MonitoringThread,
        alt: "JEUS9 Monitoring Thread",
      },
    ],
    description:
      "JEUS9 is a web application that allows you to manage your JEUS9 server.",
  },
  previousVersion: {
    jeus21: {
      img: [
        {
          src: Jeus21Login,
          alt: "JEUS21 Login",
        },
        {
          src: Jeus21Server,
          alt: "JEUS21 Server",
        },
        {
          src: Jeus21Domain,
          alt: "JEUS21 Domain",
        },
      ],
      description:
        "JEUS21 is a web application that allows you to manage your JEUS21 server.",
    },
    "jeus8.5": {
      img: [
        {
          src: Jeus85Login,
          alt: "JEUS8.5 Login",
        },
        {
          src: Jeus85Home,
          alt: "JEUS8.5 Home",
        },
        {
          src: Jeus85Server,
          alt: "JEUS8.5 Server",
        },
        {
          src: Jeus85Domain,
          alt: "JEUS8.5 Domain",
        },
        {
          src: Jeus85AppInstall,
          alt: "JEUS8.5 App Install",
        },
      ],
      description:
        "JEUS8.5 is a web application that allows you to manage your JEUS8.5 server.",
    },
  },
};

export function JeusPortfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<keyof typeof slides>("jeus9");
  const [subValue, setSubValue] =
    useState<keyof (typeof slides)["previousVersion"]>("jeus8.5");

  const handleChangeTab = (
    _: React.SyntheticEvent,
    newValue: keyof typeof slides
  ) => {
    setValue(newValue);
  };

  const handleChangeSubTab = (
    _: React.SyntheticEvent,
    newValue: keyof (typeof slides)["previousVersion"]
  ) => {
    setSubValue(newValue);
  };

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
          src={JeusPreview}
          width="100%"
          onClick={() => setIsOpen(true)}
          alt="JEUS Admin"
        />
      </Box>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth="md">
        <DialogTitle>JEUS Admin</DialogTitle>
        <DialogContent>
          <Tabs value={value} onChange={handleChangeTab}>
            <Tab label="JEUS9" value="jeus9" />
            <Tab label="Previous Version" value="previousVersion" />
          </Tabs>
          {value === "previousVersion" && (
            <Tabs value={subValue} onChange={handleChangeSubTab}>
              <Tab label="JEUS8.5" value="jeus8.5" />
              <Tab label="JEUS21" value="jeus21" />
            </Tabs>
          )}
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
          >
            {value === "jeus9"
              ? slides[value].img.map((img) => (
                  <Fragment key={img.alt}>
                    <SwiperSlide>
                      <Box p="16px">
                        <Typography>{slides[value].description}</Typography>
                      </Box>
                      <img src={img.src} width="100%" alt={img.alt} />
                    </SwiperSlide>
                  </Fragment>
                ))
              : slides[value][subValue].img.map((img) => (
                  <Fragment key={img.alt}>
                    <SwiperSlide>
                      <Box p="16px">
                        <Typography>
                          {slides[value][subValue].description}
                        </Typography>
                      </Box>
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

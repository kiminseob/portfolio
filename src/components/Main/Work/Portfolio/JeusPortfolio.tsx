import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import JeusAdmin from "@/assets/img/work/jeus_admin.png";
import { useState } from "react";

export function JeusPortfolio() {
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
          src={JeusAdmin}
          width="100%"
          onClick={() => setIsOpen(true)}
          alt="JEUS Admin"
        />
      </Box>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>JEUS Admin</DialogTitle>
        <DialogContent>
          <Typography>
            JEUS Admin is a web application that allows you to manage your JEUS
            server.
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

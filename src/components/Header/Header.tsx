import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useColorScheme,
} from "@mui/material";
import { useState } from "react";
import Turtle from "@/assets/animation/logo/turtle.gif";
import Jellyfish from "@/assets/animation/logo/jellyfish.gif";
import Elepant from "@/assets/animation/logo/elepant.gif";
import Seagull from "@/assets/animation/logo/seagull.gif";
import Camel from "@/assets/animation/logo/camel.gif";

const drawerWidth = 240;
const navItems = ["Intro", "About", "Skill", "Experience", "Work"];
const logos = [Elepant, Turtle, Jellyfish, Seagull, Camel];

export function Header() {
  const { mode, setMode } = useColorScheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoIdx, setLogoIdx] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    if (!mode || mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        inseop kim
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              LinkComponent="a"
              href={`#${item.toLocaleLowerCase()}`}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p="0 12px"
      >
        <Typography sx={(theme) => ({ color: theme.color["icon-color-01"] })}>
          Switch Theme
        </Typography>
        <IconButton onClick={toggleDarkMode}>
          {mode === "dark" ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Stack>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        color="transparent"
        sx={(theme) => ({
          bgcolor: theme.color["background-color-01"],
          alignItems: "center",
          height: "68px",
        })}
      >
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: 1280,
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Box
            sx={() => ({
              display: { xs: "none", sm: "flex" },
              cursor: "pointer",
            })}
          >
            <img
              src={logos[logoIdx]}
              width={50}
              onClick={() => setLogoIdx((prev) => (prev + 1) % logos.length)}
            />
          </Box>
          <Stack direction="row" alignItems="center" gap={1}>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={(theme) => ({ color: theme.color["icon-color-01"] })}
                  LinkComponent="a"
                  href={`#${item.toLocaleLowerCase()}`}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <IconButton
              onClick={toggleDarkMode}
              sx={{ display: { xs: "none", sm: "block" }, fontSize: "unset" }}
            >
              {mode === "dark" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          slotProps={{
            backdrop: {
              sx: () => ({
                bgcolor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(3px)",
              }),
            },
            paper: {
              sx: {
                backgroundImage: "none",
              },
            },
          }}
          sx={(theme) => ({
            display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": {
              bgcolor: theme.color["background-color-01"],
              boxSizing: "border-box",
              width: drawerWidth,
            },
          })}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

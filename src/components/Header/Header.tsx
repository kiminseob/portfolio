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

const drawerWidth = 240;
const navItems = ["Intro", "About", "Skill", "Experience", "Work"];

export function Header() {
  const { mode, setMode } = useColorScheme();
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <Typography sx={(theme) => ({ color: theme.color["icon-color-02"] })}>
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
          height: "68px",
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            sx={(theme) => ({
              color: theme.color["text-color-01"],
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            })}
          >
            inseop kim
          </Typography>
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
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {mode === "dark" ? <DarkMode /> : <LightMode />}
          </IconButton>
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

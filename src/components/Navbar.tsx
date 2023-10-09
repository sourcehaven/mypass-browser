import React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  Box,
  CssBaseline,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Password as PasswordIcon,
  Folder as FolderIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";

import { actions as authActions } from "state/auth";
import { actions as themeActions } from "state/theme";
import { actions as pageActions } from "state/page";
import { RootState } from "state";

const drawerWidth = "200px";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => {
  // const appTheme = useSelector((state: RootState) => state.theme.mode);
  return {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
    // ".MuiListItemIcon-root": { color: appTheme === "light" ? theme.palette.primary.light : theme.palette.primary.dark }
  };
});

type NavbarProps = {
  mainComponent?: React.ElementType;
};

export default (props: NavbarProps) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const appTheme = useSelector((state: RootState) => state.theme.mode);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => dispatch(authActions.logout() as unknown as AnyAction);
  const handleAppThemeSwitch = () => dispatch(themeActions.toggleDL() as unknown as AnyAction);

  const MainComponent = props.mainComponent;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap component="div" sx={{ alignSelf: "center" }}>
              MyPass
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <IconButton color="inherit" aria-label="switch theme" onClick={handleAppThemeSwitch}>
              {appTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
            <IconButton color="inherit" title="Logout" aria-label="Logout" onClick={handleLogout}>
              <ExitToAppIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { Icon: PasswordIcon, label: "Passwords", action: () => dispatch(pageActions.switchToPasswords()) },
            { Icon: FolderIcon, label: "Folders", action: () => dispatch(pageActions.switchToFolders()) },
          ].map((item) => (
            <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={item.action}
                aria-label={item.label}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <item.Icon />
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { Icon: SettingsIcon, label: "Settings", action: () => dispatch(pageActions.switchToSettings()) },
            { Icon: InfoIcon, label: "About", action: () => dispatch(pageActions.switchToAbout()) },
          ].map((item) => (
            <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={item.action}
                aria-label={item.label}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <item.Icon />
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {MainComponent && (
        <Box component="main" className="container" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <MainComponent />
        </Box>
      )}
    </Box>
  );
};

"use client"
import { useEffect, useState } from "react";
import React, { ReactNode } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import GradingIcon from "@mui/icons-material/Grading";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { getKeyFromLocalStorage, loggedInUserInfo } from "@/util/localStorage";
import { useRouter } from "next/navigation";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const router = useRouter();
  let key = getKeyFromLocalStorage('key');
  if (!key) {
    router.push("/login")
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = loggedInUserInfo();
    setUser(userInfo?.role);
  }, [setUser]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
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
          <Typography variant="h6" noWrap component="div">
            Grocer Gateway
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/">
              <ListItemIcon>{<InboxIcon />}</ListItemIcon>
              <ListItemText>
                <Typography>Home</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          {user == 'admin' && <ListItem disablePadding>
            <ListItemButton component={Link} href="/dashboard/allProduct">
              <ListItemIcon>{<FormatAlignJustifyIcon />}</ListItemIcon>
              <ListItemText>
                <Typography>All Product</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>}
          {user == 'admin' && <ListItem disablePadding>
            <ListItemButton component={Link} href="/dashboard/addProduct">
              <ListItemIcon>{<PostAddIcon />}</ListItemIcon>
              <ListItemText>
                <Typography>Add Product</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>}
          {user == 'user' && <ListItem disablePadding>
            <ListItemButton component={Link} href="/dashboard/my-orders">
              <ListItemIcon>{<GradingIcon />}</ListItemIcon>
              <ListItemText>
                <Typography>My Order</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>}
          {user == 'admin' && <ListItem disablePadding>
            <ListItemButton component={Link} href="/dashboard/orders">
              <ListItemIcon>{<ListAltIcon />}</ListItemIcon>
              <ListItemText>
                <Typography>Order</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default DashBoardLayout;

import './App.css';
import { Outlet } from "react-router-dom"
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import ChairIcon from '@mui/icons-material/Chair';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import SavingsIcon from '@mui/icons-material/Savings';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import {
  Link as RouterLink,
  MemoryRouter,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

export const faviconsIntroductionDialog = React.createContext()

export default function MiniDrawer() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [avatarsOpen, setAvatarsOpen] = React.useState(false);
  const [avatarsJsonOpen, setAvatarsJsonOpen] = React.useState(false);
  const [faviconsOpen, setFaviconsOpen] = React.useState(false);
  const [faviconsJsonOpen, setFaviconsJsonOpen] = React.useState(false);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [faviconsIntroductionDialogOpen, setFaviconsIntroductionDialogOpen] = React.useState(true);
  const [tipsDialogOpen, setTipsDialogOpen] = React.useState(false);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );



  function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
      return <StaticRouter location="/">{children}</StaticRouter>;
    }

    return (
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        {children}
      </MemoryRouter>
    );
  }

  Router.propTypes = {
    children: PropTypes.node,
  };

  function ListItemLink(props) {
    const { icon, primary, to, disabled } = props;

    const renderLink = React.useMemo(
      () =>
        React.forwardRef(function Link(itemProps, ref) {
          return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
        }),
      [to],
    );

    return (
      <li>
        <ListItemButton component={renderLink} disabled={disabled}>
          {icon ? <ListItemIcon sx={{ px: 0 }}>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItemButton>
      </li>
    );
  }

  ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };


  return (
    <faviconsIntroductionDialog.Provider value={{ setFaviconsIntroductionDialogOpen }}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" open={drawerOpen}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => { setDrawerOpen(true) }}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(drawerOpen && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Eddie's Favicons
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={drawerOpen}>
            <DrawerHeader>
              <IconButton onClick={() => { setDrawerOpen(false) }}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItemLink to="/" primary="Home" icon={<ChairIcon />} />
              <ListItemButton onClick={() => { setAvatarsOpen(!avatarsOpen) }}>
                <ListItemIcon>
                  <AddReactionIcon />
                </ListItemIcon>
                <ListItemText primary="Profile Pictures" />
                {avatarsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={avatarsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component="a" href="https://eddiehe-profile-pictures-darkmode.vercel.app/" rel="noopener noreferrer">
                    <ListItemIcon>
                      <BedtimeIcon />
                    </ListItemIcon>
                    <ListItemText primary="DarkMode" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} component="a" href="https://eddiehe-profile-pictures-lightmode.onrender.com/" rel="noopener noreferrer">
                    <ListItemIcon>
                      <LightModeIcon />
                    </ListItemIcon>
                    <ListItemText primary="LightMode" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => { setAvatarsJsonOpen(!avatarsJsonOpen) }}>
                    <ListItemIcon>
                      <FolderZipIcon />
                    </ListItemIcon>
                    <ListItemText primary="JSON" />
                    {avatarsJsonOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={avatarsJsonOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 6 }} component="a" href="https://my-json-server.typicode.com/eddiehe49/profile-pictures/" target="_blank" rel="noopener noreferrer">
                        <ListItemIcon>
                          <DataObjectIcon />
                        </ListItemIcon>
                        <ListItemText primary="JSONPlaceholder" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
              <ListItemButton onClick={() => { setFaviconsOpen(!faviconsOpen) }}>
                <ListItemIcon>
                  <FaceRetouchingNaturalIcon />
                </ListItemIcon>
                <ListItemText primary="Favicons" />
                {faviconsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={faviconsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component="a" href="https://eddiehe-favicons.vercel.app/" rel="noopener noreferrer" disabled={useLocation().pathname === "/" ? true : null}>
                    <ListItemIcon>
                      <Brightness4Icon />
                    </ListItemIcon>
                    <ListItemText primary="Auto" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} component="a" href="https://eddiehe-favicons-darkmode.vercel.app/" rel="noopener noreferrer">
                    <ListItemIcon>
                      <Brightness2Icon />
                    </ListItemIcon>
                    <ListItemText primary="DarkMode" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} component="a" href="https://eddiehe-favicons-lightmode.onrender.com/" rel="noopener noreferrer">
                    <ListItemIcon>
                      <BrightnessHighIcon />
                    </ListItemIcon>
                    <ListItemText primary="LightMode" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => { setFaviconsJsonOpen(!faviconsJsonOpen) }}>
                    <ListItemIcon>
                      <SavingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="JSON" />
                    {faviconsJsonOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={faviconsJsonOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 6 }} component="a" href="http://my-json-server.typicode.com/Eddie-He-090/favicons/" target="_blank" rel="noopener noreferrer">
                        <ListItemIcon>
                          <PermDataSettingIcon />
                        </ListItemIcon>
                        <ListItemText primary="JSONPlaceholder" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
              <ListItemLink to="/about" primary="About" icon={<SignLanguageIcon />} disabled={useLocation().pathname === "/about" ? true : false} />
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Outlet></Outlet>
          </Box>
        </Box>
        <Dialog
          fullWidth={true}
          maxWidth="sm"
          open={faviconsIntroductionDialogOpen}
        >
          <DialogTitle>What are favicons?</DialogTitle>
          <DialogContent>
            <img src="faviconsIntroduction.jpg" alt="favicons introduction" height="100%" width="100%"></img>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => { setFaviconsIntroductionDialogOpen(false) }}>Close</Button>
            <Button onClick={() => { setTipsDialogOpen(true) }}>OK</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          fullWidth={true}
          maxWidth="xs"
          open={tipsDialogOpen}
        >
          <DialogTitle>Tips</DialogTitle>
          <DialogContent>
            <ul>
              <li><span style={{ fontSize: "medium", fontWeight: "bold" }}>There is a like button.</span><br />Give your preferred favicon a thumb up!</li>
              <br />
              <li><span style={{ fontSize: "medium", fontWeight: "bold" }}>Scroll down!</span><br />Have fun in the comment section.</li>
            </ul>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => { setTipsDialogOpen(false); setFaviconsIntroductionDialogOpen(false) }}>OK</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </faviconsIntroductionDialog.Provider>
  );
}

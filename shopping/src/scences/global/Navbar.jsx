import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { Badge, Box, IconButton, Typography, Button } from "@mui/material";
import { setIsCartOpen } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import List from '@mui/material/List';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Navbar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
          onClick={() => navigate("/")}
          sx={{ p: '20px', "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
          fontWeight="bold"
        >
          <Typography variant="h3" fontWeight="bold">
            FASHION SHOP
          </Typography>
        </Box>
      <Divider />
      <List
          display="flex"
          justifycontent="space-between"
          columngap="20px"
          zindex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton 
            sx={{ color: "black" }}
            onClick={() => navigate('/profile')}
          >
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
          <Button
              onClick={() => navigate('/login')}
              variant="contained"
              sx={{ backgroundColor: shades.secondary[400], color: "white" }}
          >
            Login
          </Button>
          <Button
              onClick={() => navigate('/register')}
              variant="contained"
              sx={{ backgroundColor: shades.primary[400], color: "white" }}
          >
            Register
          </Button>
        </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box 
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
      sx={{ display: 'flex', backgroundColor: "rgba(255, 255, 255, 0.95)" }}
    >
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            onClick={() => navigate('/')}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
          >
            FASHION SHOP
          </Typography>
      <Box
          display="flex"
          justifCcontent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "white" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton 
            sx={{ color: "white" }}
            onClick={() => navigate('/profile')}
          >
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "white" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "white" }}>
            <MenuOutlined />
          </IconButton>
          <Button
              onClick={() => navigate('/login')}
              variant="contained"
              sx={{ backgroundColor: shades.secondary[400], color: "white" }}
          >
            Login
          </Button>
          <Button
              onClick={() => navigate('/register')}
              variant="contained"
              sx={{ backgroundColor: shades.primary[400], color: "white" }}
          >
            Register
          </Button>
        </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";


const Item = ({ title, to, icon, selected, setSelected, subMenu }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  if (subMenu) {
    return (
      <SubMenu title={title} icon={icon} label={title}  >
        {/* Render sub-menu items */}
        {subMenu.map((item) => (
          <MenuItem key={item.title} active={selected === item.title} onClick={() => setSelected(item.title)} 
          rootStyles={{
            color: `${colors.greenAccent[500]}`,
            backgroundColor: `${colors.primary[500]}`,
          }}
  
          menuItemStyles={{  
              button: ({level,active,disabled}) => {
                if (level === 0) {
                  return {
                    color: active? `${colors.primary[500]}` : `${colors.greenAccent[500]}`,
                    color: disabled? `${colors.greenAccent[500]}` : `${colors.greenAccent[500]}`,
                    backgroundColor: active ? "#70d8bd" : undefined,
                    "&:hover": {
                       backgroundColor: "#70d8bd !important",
                       color: "white !important",
                       borderBottom: "2px solid #F305F8",
                       fontWeight: "bold !important"
                     },
                  };
                }
              },
            
            }
          }
          
            component={<Link to={item.to} />}
          >
            <Typography>{item.title}</Typography>
          </MenuItem>
        ))}  
      </SubMenu>
    );
  }

  return (
    <MenuItem
      active={selected === title}
      rootStyles={{
        color: `${colors.greenAccent[500]}`,
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  


  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[500]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#fff !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed} 
      border="none" 
      backgroundColor="transparent" 
      transitionDuration={300}
      style={{
        height: "100%", // Set the height to 100% of the viewport
        // width: "100%", // Set the width to 100% of the page
        position: "relative", // Add this to ensure the sidebar stays in position
      }}>
        <Menu iconShape="square"
          menuItemStyles={
            {
              button: ({level,active,disabled}) => {
                if (level === 0) {
                  return {
                    color: disabled ? "#fff" : "#fff",
                    backgroundColor: active ? "#4cceac" : undefined,
                    "&:hover": {
                       backgroundColor: "#70d8bd !important",
                       color: "white !important",
                       borderBottom: "2px solid #F305F8",
                       fontWeight: "bold !important"
                     },
                  };
                }
              },
            }
          }
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "#fff",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <img
                  alt="logo"
                  width="120px"
                  height="70px"
                  src={`../../assets/logo.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
                
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="40px" mt="-25px">
              <Box display="flex" justifyContent="center" >
              <Typography
                  variant="h2"
                  color="#fff"
                  fontWeight="bold"
                  sx={{ m: "0 0 0 0", mb:"auto"}}
                >
                  Stores
                </Typography>
                
              </Box>
              {/* <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Admin
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  board
                </Typography>
              </Box> */}
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Typography
              variant="h6"
              color="#fff8"
              sx={{ m: "15px 0 5px 20px" }}
            >
              Overview
            </Typography>
            <Item
              title="Dashboard"
              to="/"
              icon={<EqualizerOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}

            />

            <Typography
              variant="h6"
              color="#fff8"
              sx={{ m: "15px 0 5px 20px" }}
            >
              Inventory
            </Typography>
            <Item
              title="Profile"
              to="/profile"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Product"
              to="/product"
              icon={<LocalShippingOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              subMenu={[
                { title: "View Product", to: "/view-product" },
                { title: "Add to Preexisting Product", to: "/add-preexisting-product" },
                { title: "Add New Product", to: "/add-new-product" },
              ]}
            />
            <Item
              title="Category"
              to="/category"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="#fff8"
              sx={{ m: "15px 0 5px 20px" }}
            >
              view & create users
            </Typography>
            <Item
              title="Users"
              to="/user"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              subMenu={[
                { title: "View Users", to: "/view-users" },
                { title: "Add New User", to: "/add-new-user" },
              ]}
            />
            <Item 
              title="Logout" 
              to="/logout"
              icon={<LogoutRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            
            />
            
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Navbar;
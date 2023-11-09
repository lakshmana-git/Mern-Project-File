import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer } from '@mui/material';
import '../../styles/HeaderStyles.css';
import logo from '../Layout/logo.jpg';
const Header = () => {
     const [mobileOpen, setMobileOpne] = useState(false)
     console.log()
     //handle menu click
     const handleDrawerToggle = () => {
          setMobileOpne(!mobileOpen)
     }
     const ColorButton = styled(Button)(({ theme }) => ({
          color: theme.palette.getContrastText('#fe511a'),
          backgroundColor: '#fe511a',
          '&:hover': {
               backgroundColor: '#fe511a',
          },
     }));


     //menu drawer
     const drawer = (
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
               <Box sx={{ flexGrow: 1 }}>

                    <img src={logo} width={100} height={70} />
               </Box>
               {/* </Typography> */}

               <Divider />

               <ul className='mobile-navigation'>
                    <li>
                         <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                         <Link to={'/services'}>Services</Link>
                    </li>
                   
                    <li>


                         <Button className='btn' variant="contained" sx={{ backgroundColor: '#fe511a', color: 'white', fontWeight: 'bold' }} >Login</Button>
                    </li>
                    <li>
                         <Button variant="outlined" sx={{ backgroundColor: 'white', color: '#fe511a', borderStyle: 'solid', borderColor: '#fe511a', fontWeight: 'bold' }} className='btn'> Partner with us</Button>
                    </li>
               </ul>


          </Box>
     )
     return (
          <>

               <Box>
                    <AppBar component={'nav'} sx={{ bgcolor: "white" }} >
                         <Toolbar>
                              <IconButton color="black" aria-label='open drawer' edge="start" sx={{ mr: 2, display: { sm: "none" } }}
                                   onClick={handleDrawerToggle}
                              >
                                   <MenuIcon />
                              </IconButton>
                              {/* <Typography  sx={{flexGrow:1 }}> */}
                              <Box sx={{ flexGrow: 1 }}>

                                   <img src={logo} width={120} height={80} />
                              </Box>
                              {/* </Typography> */}


                              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                                   <ul className='navigation'>
                                        <li className='li-items'>
                                             <Link to={'/'}>Home</Link>
                                        </li>

                                        <li>
                                             <Link to={'/services'}>Services</Link>
                                        </li>
                                      
                                        <li>

                                             {/* <Button className='btn' variant="contained" sx={{backgroundColor:'#fe511a',color:'white',fontWeight:'bold' }} >Login</Button> */}
                                           <NavLink to={'/login'} ><ColorButton variant="contained">LogIn</ColorButton> </NavLink>
                                        </li>

                                        <li>
                                             <Button variant="outlined" sx={{ backgroundColor: 'white', color: '#fe511a', borderStyle: 'solid', borderColor: '#fe511a', fontWeight: 'bold' }} className='btn'> Partner with us</Button>
                                        </li>
                                   </ul>
                              </Box>

                         </Toolbar>
                    </AppBar>
                    <Box component="nav">
                         <Drawer variant="temporary" open={mobileOpen} onclose={handleDrawerToggle}
                              sx={{
                                   display: { xs: "block", sm: 'none' }, "& .MuiDrawer-paper": {
                                        boxSizing: "border-box",
                                        width: "240px",
                                   }
                              }}
                         >
                              {drawer}
                         </Drawer>
                    </Box>
                    <Toolbar />
               </Box>
          </>

     )
}


export default Header


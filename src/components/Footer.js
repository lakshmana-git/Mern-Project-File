import {Box, Typography } from '@mui/material'
import React from 'react'
import '../styles/FooterStyles.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
   <>

     <footer className='footer'>
        <div className='footer-main'>
          <div>
             <FacebookIcon sx={{color:'white',fontSize:'50px',marginRight:'20px'}} className='icon'/>
             <InstagramIcon sx={{color:'white',fontSize:'50px',marginRight:'20px'}} className='icon'/>
             <TwitterIcon sx={{color:'white',fontSize:'50px',marginRight:'20px'}} className='icon'/>
          </div>
          <hr/>
          <div className='footer-contact'>
            <h4>Contact us at</h4>
            <p>servebuddy@gmail.com</p>
          </div>
        </div>

     </footer>
   </>
  )
}

export default Footer
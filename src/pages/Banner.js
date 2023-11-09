import { Box, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'
const Banner = () => {
  return (
    <>
    {/* <div className='home'>
        <Box className='home-main' sx={{marginTop:'20px'}}>

          <Typography sx={{width:"500px",fontSize:'30px'}}>"Revolutionize your restaurant experience with our cutting-edge digital menu and QR code table ordering system, enhancing convenience and efficiency for both you and your customers."</Typography>

        </Box>
        <div className='div1'>
        <img src="https://img.freepik.com/free-vector/people-eating-food-court-cafeterias_74855-5284.jpg?w=1380&t=st=1684251130~exp=1684251730~hmac=cdb0595315f5af6a838c686403c5db445277ebf53b4e9c11eda38a6586e4e007" width={800} height={600} />
        </div>
        
    </div> */}

  
    <div>
          <div className='home'>
           
            
            <div className='home-heading'>
              <h3><span className='span'>"Revolutionize</span> your restaurant experience with our cutting-edge <span className='span1'>digital menu</span> and <span className='span1'>QR code</span> table ordering system, enhancing convenience and efficiency for both you and your <span className='span2'>customers"</span></h3>
            </div>
            <div class="home-img">
              <img src="https://img.freepik.com/free-vector/people-eating-food-court-cafeterias_74855-5284.jpg?w=1380&t=st=1684251130~exp=1684251730~hmac=cdb0595315f5af6a838c686403c5db445277ebf53b4e9c11eda38a6586e4e007" className='inside'/>
            </div>
            {/* 0width={700} height={60} */}

          </div>
    </div>
   
    
    </>
)}

export default Banner
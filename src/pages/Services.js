import React from 'react'
import "../styles/ServicesStyles.css"

import { Grid,Box,Card, Typography,CardMedia,CardActionArea,CardContent,Button,CardActions} from '@mui/material'
import Layout from '../components/Layout/Layout'
import Header from '../components/Layout/Header'
const Services = () => {
  return (

      <>
       <Header/>
      
       <Typography  sx={{textAlign:"center",fontSize:"40px",marginTop:'40px',fontWeight:'bold'}}>
              Services
       </Typography>
       <div className='card-main'>
       
            <div className='card1'>
                  
                
                  <img src='https://img.freepik.com/free-vector/people-ordering-food-cafe-online_74855-5913.jpg?size=626&ext=jpg&ga=GA1.1.362557203.1684250412&semt=ais'/>
                  <div>
                  <h3>Digital Menu</h3>      
                  <p>Platform that allows hotels to sign up and add their menu items, which can be displayed digitally for customers to view and order from their smartphones</p>
                  </div>
           
           
            </div>



            <div className='card2'>
                  
                 
                   
              
                    <div>
                    <h3>QR Scan</h3>
                    <p>Develop a digital solution with QR code table ordering for hotel guests to order food and drinks from their smartphones, improving operational efficiency and enhancing the guest experience</p>
                    </div>


                    <img src='https://img.freepik.com/free-vector/qr-code-concept-illustration_114360-5773.jpg?size=626&ext=jpg&ga=GA1.1.362557203.1684250412&semt=ais'/>
              </div>

              <div className='card1'>
                  
                  
                    <img src='https://img.freepik.com/free-vector/waitress-wearing-face-mask-serving_52683-41249.jpg?size=626&ext=jpg&ga=GA1.1.362557203.1684250412&semt=ais'/>
                    <div>
                    <h3>Enhanced Experience</h3>
                    <p>This system will not only improve the efficiency of the ordering process but also enhance the guest experience by providing a convenient and interactive way to order food and drinks.</p>
                    </div>
              
              </div>
  
  


            
            
           
         

            

       </div>
       
     </>
  )
}

export default Services
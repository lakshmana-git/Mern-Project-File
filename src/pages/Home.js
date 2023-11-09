import React from 'react'
import Header from '../components/Layout/Header'
import "../styles/Home.Style.css"
import Services from './Services'
import Conatct from './Conatct'
import Banner from './Banner'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
       {/* <Header/> */}
      <Banner/>
      <Services/>
      <Footer/>
   
      </>
  )
}

export default Home
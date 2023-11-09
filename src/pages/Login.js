import React from 'react'

import { useState } from 'react'
import Pagenotfound from './Pagenotfound'

const Login = () => {
  const [email,setEmail]  = useState('')
  const [password,setPassword]  = useState('')
  const handleSubmit = async(e)=>{
       e.preventDefault()


       console.log(email,password)
  }
  return (
    <Pagenotfound/>
  )
}

export default Login 
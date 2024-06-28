import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Captcha from './Captcha'
import CaptchaGenerator from './CaptchaGenerator'

function App() {


  return (
    <>
     {/* <Captcha/> */}
     <CaptchaGenerator/>
    </>
  )
}

export default App

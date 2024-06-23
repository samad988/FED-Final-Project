/* eslint-disable no-unused-vars */
import React from 'react'
import Weather from './components/Weather'
const App = () => {
  return (
    <div className='app'>
      <div className='header'>
        <h1 className="header1"> <img className='logo1' src='https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b2/c7/7a/b2c77a5e-90ed-04b2-eb5b-03bae02734fc/AppIcon-0-1x_U007emarketing-0-7-0-85-220-0.png/246x0w.webp'/>Weather Wizard</h1>
      </div>
      <Weather/>
    </div>
  )
}

export default App
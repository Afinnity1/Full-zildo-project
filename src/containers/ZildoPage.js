import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Navbar'
import Location from './Location'
import Geomap from './Geomap'
import Review from './Review'
import Bottom from './Bottom'

const ZildoPage = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?
    current_theme : 'light');

    useEffect(() =>{
      localStorage.setItem('current_theme', theme);
    }, [theme])

  return (
    <div>
       <Navbar theme={theme} setTheme={setTheme}/>
          <Location />
          <Geomap /> 
          <Review />
          <Bottom />
    </div>
  )
}

export default ZildoPage
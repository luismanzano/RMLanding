import React, { useState, Fragment } from 'react';
import footerLogo from './img/REDMATTER.png';
import redLogo from './img/redLogo.png';

export default function Navbar(){
    const [colorChange, setColorchange] = useState(false);
    const [hide, setHide] = useState(false);
  const changeNavbarColor = () =>{
      console.log('scrolling');
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };

  React.useEffect(() => {
    function handleResize() {
      if(window.innerWidth > 900){
        setHide(false)
        console.log("HELLOO",window.innerWidth)
      } else{
        setHide(true)
      }
      
    
}

    window.addEventListener('resize', handleResize)
  })

  window.addEventListener('scroll', changeNavbarColor);

    return (
        <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <div className="nav-logo">
            <div>
                <img className="isotype" src={redLogo} alt="Red Matter Isotype"/>
                <img className="typography" src={footerLogo} alt="Red Matter Typography"/>
                </div>
                <p className="nav-link show-mobile" onClick={() => {
                  setHide(!hide);
                }}>Open/Close</p>
            </div>

            <div className='nav-links'>
                <p className={hide ? 'nav-link hidden' : 'nav-link'}><a href="#">Start</a></p>
                <p className={hide ? 'nav-link hidden' : 'nav-link'}><a href="#">Company</a></p>
                <p className={hide ? 'nav-link hidden' : 'nav-link'}><a href="#">Products</a></p>
                <p className={hide ? 'nav-link hidden' : 'nav-link'}><a href="#">Contact Us</a></p>
                
            </div>
        </div>
    )
}
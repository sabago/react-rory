import * as React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
// import limo1 from "./limo1.png";
// import tinylimo1 from "./tinylimo1.png";

const logo =  require("./limo1.png");
const logo2 =  require("./tinylimo1.png");

export const App = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 650 ? logo : logo2;

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });
  return (
    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">
          <div style={{fontSize: 32}}>
          <h1>CASEY LIMOUSINE</h1>
          <p>Call Now: (802)-451-8006</p>
          <p> Email: caseylimovt@gmail.com</p>
      </div>
      </div>
    </div>
  );
}

import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';


function Redirector() {
  let currLoc = useLocation()
    useEffect(() => { 
      const urlID = currLoc.pathname.slice(1)
      const urlLookup = localStorage.getItem(`ls:${urlID}`)
      
      document.location = urlLookup
    });

  return (
    <div className="App">
      Redirecting...
    </div>
  );
}

export default Redirector;

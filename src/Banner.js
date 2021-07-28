import React,{useState} from 'react';
import './Banner.css';
import {Button} from '@material-ui/core';
import Search from './Search';

function Banner()
{
    // to track if the searchButton has been clicked
    // then we will have to display 'Hide' on the button
    const[showSearch,setShowSearch]= useState(false);
    return(
        <div className='banner'>
           <div className="banner__search">
               {/* refer to search.js file */}
               {showSearch && <Search />}
               <Button 
            //    set the value of showsearch to be opposite of what it was earlier
               onClick={()=>setShowSearch(!showSearch)} className="banner__searchButton" 
               variant="outlined">
                   {showSearch?"Hide":"Search Dates"}
               </Button>
           </div>
           <div className="banner__info">
              <h2>Get out and stretch your imagination</h2>
              <h5>Plan a different kind of getaway
                  to uncover the hidden gems
                  near you
              </h5>
              {/* material UI allows u to pass properties
              to the components */}
              <Button variant='outlined'>
                  Explore nearby
              </Button>
           </div>
        </div>
    )
}

export default Banner;
import React from 'react';
import './Footer.css';
import Copyright from '@material-ui/icons/Copyright';

function Footer()
{
    return(
        <div className="footer">
          <div className="copyright" style={{'display':'flex','justify-content':'center','align-items':'center'}}>
            <Copyright style={{'font-size':'1rem','padding':'0.5rem'}} />
           <p>
             2021 AirBNB clone! No rights 
            reserved as this is a demo!
           </p>
          </div>
            
           <p>
              Privacy . Terms . Sitemap . Company Details
            </p>
        </div>
    )
}

export default Footer;
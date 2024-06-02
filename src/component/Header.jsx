import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import  Divider from '@mui/material/Divider';
const Header = ({date=Date.now(),city,re,pr}) => {
    return (
<>
<Grid style={{
            direction:'rtl',
           }} container spacing={2}>
        <Grid item xs={6}>
           <div style={{
            direction:'rtl'
           }}>
              <h2 className='header-h2'>{date}</h2>
              <h1>{city}</h1>
           </div>
        </Grid>

        <Grid item xs={6}>
           <div style={{
            direction:'ltr'
           }}>
              <h2 className='header-h2'>    متبقي حتى الصلاة {pr.nextprayname}</h2>
              <h1>
{               re
}              </h1>
           </div>
          
        </Grid>
       
</Grid>
 <Divider style={{
    borderColor:"#000",
   opacity:'0.1'
 }}/>
</>
    );
}

export default Header;

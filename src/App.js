import React from 'react';
import Button from '@mui/material/Button';
import './App.css'
import Stack from '@mui/material/Stack';import MainContent from './component/MainContent';
import { Container } from '@mui/material';
import svg from './mosque-islam-svgrepo-com.svg';
const App = () => {
  return (
    <div style={{
      overflow:"scroll"
    }}>
    <div className='svg'  direction="row" style={{
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      zIndex:-2
    }} spacing={2}>
       </div>

   <div >
   <Container maxWidth="xl">
   <MainContent/>

   </Container>
   </div>
 
  </div>
  );
}

export default App;

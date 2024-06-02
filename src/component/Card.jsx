

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardMy({name,time,img}) {
  return (
  
    <Card sx={{ maxWidth: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}


const CaardMy = ({name,time,img}) => {
    return (
        <Card >
            <CardContent style={{
                textAlign:'center',
                overflow:'hidden',
            }}>
               <img className='imgscal' style={{
                width:"100%",
                objectFit:"cover",
                objectPosition:"center",
                borderRadius:"10px",
                transition:'0.4s',
                overflow:'hidden',
                boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
               }} src={img}
                alt="non" />
               <h2>{name}</h2>
               <p>{time}</p>
            </CardContent>
        </Card>
    );
}

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Stack from '@mui/material/Stack';
import CardMy from './Card';
import BasicSelect from './Theselect';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import fimg from "./../images/f.jpg"
import dimg from "./../images/afternon.jpg"
import aimg from "./../images/asr.jpg"
import mimg from "./../images/m.jpg"
import simg from "./../images/s.jpg"
import moment from 'moment/moment';
import  "moment/dist/locale/ar-dz"
moment.locale("ar-dz");
const MainContent = () => {
   
    const [age, setAge] = React.useState({city:'Makkh al Mukarrmah',
        name:"مكة المكرمة"
    });
    const [data,setdata]=useState([]);
    const [date,setdate] =useState(); 
    const [rrest,setrest] = useState(100)
    const [loading,setloading] = useState(false);
    const [error,seterror] = useState(null);
    const handleChange = (event) => {
        setAge({
            city:event.target.value.city,
            name:event.target.value.name
        });
    };
    const [nextpray,setnextpray]=useState(0);
    function Nextpray(){
       let nowtime=moment();
       let nextpray=null;
       if(nowtime.isAfter(moment(data.Fajr,"hh:mm")) && 
       (nowtime.isBefore(moment(data.Dhuhr,"hh:mm")))){
        nextpray=data.Dhuhr;
        setnextpray({nextpray:nextpray,
            nextprayname:"ظهر"
        })
       }
       else if(nowtime.isAfter(moment(data.Dhuhr,"hh:mm")) && 
       (nowtime.isBefore(moment(data.Asr,"hh:mm")))){
        nextpray=data.Asr;
        setnextpray({
            nextpray:nextpray,
            nextprayname:"عصر"
        })

       }
       else if(nowtime.isAfter(moment(data.Asr,"hh:mm")) && 
       (nowtime.isBefore(moment(data.Maghrib,"hh:mm")))){
        nextpray=data.Maghrib;
        setnextpray({
            nextpray:nextpray,
            nextprayname:"مغرب"
        })
       }
       else if(nowtime.isAfter(moment(data.Maghrib,"hh:mm")) && 
       (nowtime.isBefore(moment(data.Isha,"hh:mm")))){
        nextpray=data.Isha;
        setnextpray({
            nextpray:nextpray,
            nextprayname:"عشاء"
        })
       }
       else {
        nextpray=data.Fajr;
        setnextpray({
            nextpray:nextpray,
            nextprayname:"فجر"
        })
       }
       console.log(nextpray)
       console.log(nowtime.format("HH:mm:ss"))
       console.log(moment(nextpray,"hh:mm").diff(nowtime))
       let remtime=moment(nextpray,"hh:mm").diff(nowtime)
       if(remtime<0){
        remtime=moment(nextpray,"hh:mm").add(1,"days").diff(nowtime);
        setrest(remtime);
       }
      remtime=(moment.duration(remtime))
       setrest(
        `${remtime.hours()}:${remtime.minutes()}:${remtime.seconds()}`
       
       );


    }
    const citys=[
        {
            city:"Makkh al Mukarrmah",
            name:"مكة المكرمة"
        },
        {
            city:"Riyadh",
            name:"الرياض"
        },
        {
            city:"Jeddah",
            name:"جدة"
        },
        {
            city:"Dammam",
            name:"الدمام"
        },
        {
            city:"Medina",
            name:"المدينة"
        },
        {
            city:"Tabuk",
            name:"تبوك"
        },
        {
            city:"Hail",
            name:"حائل"
        },
        {
            city:"Jubail",
            name:"الجبيل"
        },
        {
            city:"Abha",
            name:"الأبها"
        },
        {
            city:'sanaa',
            name:"صنعاء"
          }

    ]
    async function fetchtimes(){
       
        try{
            setloading(true);
            const res=await fetch(`http://api.aladhan.com/v1/timingsByCity?country=SA&city=${age.city}`)
            
            const resdata=await res.json();
            setdata(resdata.data.timings);
           
            setloading(false);
        }catch(e){
            seterror(e);
            setloading(false);

        }
       
    }
    useEffect(()=>{
        fetchtimes();
    },[age,date]);
    useEffect(()=>{
        let interval= setInterval(() => {
            setrest((t)=>{
                return t-1
            })
            Nextpray()
        }, 1000);
        const t=moment();
          
        setdate(t.format('MMM Do YYYY | h:mm:ss'));
        return ()=>{
            clearInterval(interval);
        }
    },[date,data])
    if(loading){
        return <div style={{
            width:'80%',
           textAlign:'center',
            margin: "auto",
            display:'flex',
           height:"100vh",
           alignItems:'center',
            justifyContent:'center',
            flexDirection:'column'
        }}>
            <h1 style={{
                fontWeight:'bold',
                fontSize:'2.5rem'
            }}> جاري التحميل ...</h1>
            <h1  className='load-h'></h1>
        </div>
    }
    return (
        <div >
            <Header pr={nextpray} re={rrest} city={age.name} date={date}/>

           <div >
           <div style={{
              width:'80%',
              marginTop:'3rem',
                margin: "auto",
                display:'grid',
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr  ",
                gap:'1rem',
                padding:'2rem 1rem 1rem',
                borderRadius: "10px",
            }}>
                <CardMy img={fimg} name={"فجر"} time={data?
                    data.Fajr:"Fajr"
                }>
                </CardMy>
                <CardMy img={dimg} name={"ظهر"} time={
                    data?
                    data.Dhuhr:"Sunrise"
                }></CardMy>
                <CardMy img={aimg} name={"عصر"} time={
                    data?
                    data.Asr:"Dhuhr"
                }>
                </CardMy>
                <CardMy img={mimg} name={"مغرب"} time={
                    data?
                    data.Maghrib:"mic"
                }>
                </CardMy>
                <CardMy img={simg} name={"عشاء"} time={
                    data?
                    data.Isha:"Isha"
                }>
                </CardMy>
                
            </div>
           

        

           <Stack>
           <FormControl style={{
            width:'40%',
            margin:'auto',
            marginTop:'3rem',
            color:'white',
            fontSize:'2rem',
           }}>
        <InputLabel id="demo-simple-select-label"><h3 style={{
            color:'white',
            fontSize:'2rem',
            textAlign:'center'
        }}>city</h3></InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age.city }
          label="Age"
          onChange={(e)=>{
            handleChange(e)
          }}
        >
            {
                citys.map((item,index)=>{
                    return <MenuItem key={index} value={{city:item.city,
                       name:item.name}
                    }>{item.name}</MenuItem>
                })
            }
         
        </Select>
      </FormControl>
           </Stack>
           </div>
        </div>
    ); 
}

export default MainContent;

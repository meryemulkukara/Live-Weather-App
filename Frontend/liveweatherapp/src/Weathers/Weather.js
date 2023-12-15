import React, { useState } from "react";

import ThermostatIcon from '@mui/icons-material/Thermostat';
import { BsSunrise, BsSunset } from "react-icons/bs";
import '../Weathers/Weather.css';
import { BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { CgCompressV } from "react-icons/cg";


import clearnight from '../clearnight.jpg';
import clearday from '../clearsky.jpg';
import fewcloudsday from '../fewcloudsday.jpg';
import fewcloudsnight from '../fewcloudsnight.jpg';
import scatteredcloudsday from '../scatteredcloudsday.jpg';
import scatteredcloudsnight from '../scatteredcloudsnight.jpg';
import brokencloudsday from '../brokencloudsday.jpg';
import brokencloudsnight from '../brokencloudsnight.jpg';
import showerrainday from '../showerrainday.jpg';
import showerrainnight from '../showerrainnight.jpg';
import rainnight from '../rainnight.jpg';
import rainday from '../rainday.jpg';
import thunderstormday from '../thunderstormday.jpg';
import thunderstormnight from '../thunderstormnight.jpg';
import snownight from '../snownight.jpg';
import snowday from '../snowday.jpg';
import mistday from '../mistday.jpg';
import mistnight from '../mistnight.jpg';
import nobackground from '../nobackground.jpg';

import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { CiCloudSun } from "react-icons/ci";
import { FaCloudMoon } from "react-icons/fa6";
import { BsFillCloudsFill } from "react-icons/bs";
import { IoCloudSharp } from "react-icons/io5";
import { IoRainySharp } from "react-icons/io5";
import { LiaCloudMoonRainSolid } from "react-icons/lia";
import { LiaCloudSunRainSolid } from "react-icons/lia";
import { WiDayThunderstorm } from "react-icons/wi";
import { WiNightAltThunderstorm } from "react-icons/wi";
import { IoIosSnow } from "react-icons/io";
import { WiDayFog } from "react-icons/wi";
import { WiNightFog } from "react-icons/wi";




function Weather({icon,name, description, celsius, feels_like_celsius, 
    temp_min_celsius, temp_max_celsius, pressure, humidity, 
        wind_speed, country, sunriseDate, sunsetDate, city, currentDate }){

    console.log('clearSky working')
    
    const [searchCity, setSearchCity]=useState(city);
    

    const findCity=() =>{
      fetch("http://localhost:8080/?city="+searchCity).then((res) => res.json()      
      ).then((result)=>{
        console.log(result);    
    },
    (error) => {  
        console.log("ERRRRRROOOORRRRRR!!!!!!")
    })
      
  }


    const handleSubmit= () => {
      console.log(searchCity);
      findCity();
      
    }


    
    const handleCity= (e) =>{
      setSearchCity(e);
     // console.log(searchCity);
    }



    let backgroundImage;
    let iconComponent;
    switch (icon) {
      case '01d'  :
        iconComponent=< MdWbSunny/>;
        backgroundImage=clearday
        break;
      case '01n' :
        //selectedComponent = <ClearSky />;
        iconComponent=< FaMoon/>;
        backgroundImage=clearnight;
        break
      case '02d' :
        iconComponent=<CiCloudSun />;
        backgroundImage=fewcloudsday;
        break;  
      case '02n' :
        iconComponent = <FaCloudMoon/>;
        backgroundImage=fewcloudsnight;
        break;
      case '03d' :
        iconComponent= <IoCloudSharp/>;
        backgroundImage=scatteredcloudsday;
        break;
      case '03n' :
        iconComponent= <IoCloudSharp/>;
        backgroundImage= scatteredcloudsnight;
        break;
      case  '04d' :
        iconComponent = <BsFillCloudsFill/>;
        backgroundImage= brokencloudsday;
        break;
      case  '04n'  :
        iconComponent = <BsFillCloudsFill/>;
        backgroundImage= brokencloudsnight;
        break;
      case  '09d' :
        iconComponent= <IoRainySharp/>;
        backgroundImage =showerrainday;
        break;
      case  '09n' :
        iconComponent= <IoRainySharp/>;
        backgroundImage =showerrainnight;
        break;
      case '10d' :
        iconComponent= <LiaCloudSunRainSolid/>
        backgroundImage= rainday;
        break;
      case '10n' :
        iconComponent= <LiaCloudMoonRainSolid/>
        backgroundImage= rainnight;
        break;
      case '11d' :
        iconComponent= <WiDayThunderstorm/>;
        backgroundImage= thunderstormday;
        break;
      case  '11n' :
        iconComponent = <WiNightAltThunderstorm/>;
        backgroundImage= thunderstormnight;
        break;
      case '13d' :
        iconComponent = <IoIosSnow/>;
        backgroundImage= snowday;
        break;
      case  '13n' :
        iconComponent = <IoIosSnow/>;
        backgroundImage= snownight;
        break;
      case '50d' :
        iconComponent = <WiDayFog/>;
        backgroundImage= mistday;
        break;
      case  '50n' :
        iconComponent = <WiNightFog/>;
        backgroundImage= mistnight;
        break;  
      default:
        iconComponent = <div>Invalid Name</div>;
        backgroundImage= nobackground;
    }


    return(
        
        <div className="imageStyle" style={{backgroundImage:`url(${backgroundImage})`}}>   
            <div className="title_"  > {city}, {country}<div >{currentDate} </div><div >{description}</div></div>
              

               <div className="section section__weather">
                  <div className="weather_card">
                      <div className="icon_style" >{iconComponent}</div>
                      
                    </div>
                  <div className="weather_card">
                    <div className="celsius" >
                        {celsius}°  </div>
                  </div>
                  <div className="weather_card">
                    <div className="weather__card_first" >
             
                      <div className="weather_card_temp_low_high"> {temp_min_celsius}&deg;Low<br/>{temp_max_celsius}&deg;High </div>
                    </div>
                  </div>

                  <div className="weather_card">
                    <div className="weather__card-icon" ><ThermostatIcon sx={{ width:90, height:150, marginLeft:'20%'}} />
                    <div className="weather_card_temp"> Feels Like {feels_like_celsius}&deg; </div></div> 
                  </div>
                  <div className="weather_card">
                    <div className="weather__card-icon" ><BsSunrise className="BsSunrise" /> </div>
                    <div className="weather_card_sunrise" > Sunrise <br/> {sunriseDate} </div>
                     
                  </div>
                  <div className="weather_card">
                    <div className="weather__card-icon" ><BsSunset  className="BsSunset" /> </div>
                    <div className="weather_card_sunset" > Sunset <br/> {sunsetDate} </div> 
                  </div>  
                </div>

               
              
                <div className="section section__description">
                  <div className="card">
                    <div className="description__card-icon" ><BsWind /></div> <h2 className="card_def"> Wind S{wind_speed} km/h</h2>
                  </div>
                  <div className="card">
                    <div className="description__card-icon"><WiHumidity /></div> <h2 className="card_def">Humidity %{humidity}</h2>
                  </div>
                  <div className="card">
                    <div className="description__card-icon"> <CgCompressV /> </div> <h2 className="card_def">Pressure {pressure}hPa</h2>
                  </div>
                </div>
                
                <div>
                  <input onChange={i => handleCity( i.target.value)} className="input_box" type="text" name="city" placeholder="Enter City"/>
                
                  <button className="button_box" onClick={handleSubmit}>Search</button>
                </div>
            
     
         </div>
        
      
    )
 

}

export default Weather;


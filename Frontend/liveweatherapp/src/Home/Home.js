import { useEffect, useState } from "react";
import React from "react";
import Weather from "../Weathers/Weather.js";


function Home(){

    const [weatherData, setWeatherData]=useState(null);
    const[error,setError]=useState(null); 
    const[isLoaded, setIsLoaded] = useState(false);
    const [currentDate, setCurrentDate] = useState('');


    const fetchWeatherData= () =>{
        fetch("http://localhost:8080").then(res => res.json()).then(
          (result) => { 
              setIsLoaded(true);
              console.log(result);
              setWeatherData(result);  
          },
          (error) => {
              setIsLoaded(true);
              setError(error);
              console.log("ERROR!!!")
          }
      ) 

    }
 

    useEffect( ()=>{
        fetchWeatherData();
        const intervalId = setInterval(fetchWeatherData, 3600000); 
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-US', options);

        setCurrentDate(formattedDate);

    
        return () => clearInterval(intervalId);
              
    }, [weatherData]);

    



    if(error){
      return <div> 
        Error! </div>
  }
  else if( !isLoaded){
      return <div> Loading... </div>
  }
 else{
  
    const name=weatherData.weather[0].main;
    const description=weatherData.weather[0].description;
    const icon=weatherData.weather[0].icon;
    const temp=weatherData.main.temp;
    const feels_like=weatherData.main.feels_like;
    const temp_min=weatherData.main.temp_min;
    const temp_max=weatherData.main.temp_max;
    const pressure=weatherData.main.pressure;
    const humidity=weatherData.main.humidity;
    const wind_speed=weatherData.wind.speed;
    const country= weatherData.sys.country;
    const sunrise=weatherData.sys.sunrise;
    const sunset=weatherData.sys.sunset;
    const city= weatherData.name;
    const celsius =(temp- 273.15).toFixed(1);
    const temp_min_celsius=(temp_min- 273.15).toFixed(1);
    const temp_max_celsius=(temp_max- 273.15).toFixed(1);
    const feels_like_celsius=(feels_like- 273.15).toFixed(1);
    const sunriseDate = (new Date(sunrise * 1000)).toLocaleTimeString();
    const sunsetDate = (new Date(sunset * 1000)).toLocaleTimeString();
   
    
    
    //console.log({icon})
        //  <img src="https://openweathermap.org/img/wn/02n.png" style={{ width: '300px', height: '200px' }}></img>
        //selectedComponent= {selectedComponent}
        //{React.cloneElement(selectedComponent, { icon, name, description, temp, feels_like,         temp_min, temp_max, pressure, humidity,         wind_speed, country, sunrise, sunset, city, currentDate }
      return (
          <div  > 
          
            
             <Weather icon={icon} name={name} description={description} 
              celsius={celsius} feels_like_celsius={feels_like_celsius}  temp_min_celsius={temp_min_celsius}
              temp_max_celsius={temp_max_celsius} pressure={pressure}  humidity={humidity}    
              wind_speed={wind_speed}  country={country} sunriseDate={sunriseDate}  sunsetDate={sunsetDate}
              city={city} currentDate={currentDate} />
                                                      
   
    
          </div>
          );
    }
}

export default Home;

package com.LiveWeatherApp.demo.controller;

import com.LiveWeatherApp.demo.dto.Wheather;
import com.LiveWeatherApp.demo.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping
public class WeatherController {

    @Autowired
    WeatherService weatherService;


    public WeatherController(WeatherService weatherService){
        this.weatherService=weatherService;
    }



    @CrossOrigin
    @GetMapping
    public Wheather getWeatherByCity(@RequestParam Optional<String> city) {
        return weatherService.getWeatherData(city);
      //  // Eğer şehir adı belirtilmemişse, varsayılan bir şehir kullanabilirsiniz
      //  if (!city.isPresent() || city.isEmpty()) {
      //      return weatherService.getWeatherData();  // Varsayılan şehir adını burada belirtin
      //  }
      //  return weatherService.getWeatherDataByCity(city.get());
    }

    //@GetMapping()    public Wheather getWeather() {        return weatherService.getWeatherData();    }



    //public String getWeather() {        return weatherService.getWeatherData();    }


}

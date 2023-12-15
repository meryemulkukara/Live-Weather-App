package com.LiveWeatherApp.demo.service;

import com.LiveWeatherApp.demo.config.WeatherConfiguration;
import com.LiveWeatherApp.demo.dto.Wheather;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
public class WeatherService {


    private final RestTemplate restTemplate;
    @Autowired
    private final WeatherConfiguration appProperties;

    public WeatherService(RestTemplate restTemplate, WeatherConfiguration appProperties){
        this.appProperties = appProperties;
        this.restTemplate = restTemplate;
    }

    public Wheather getWeatherData(Optional<String> city) {
        city.ifPresent(appProperties::setCity);

         String url_full=appProperties.getUrl()+ "?q=" + appProperties.getCity() + "&appid=" + appProperties.getKey();
         return restTemplate.getForObject(url_full, Wheather.class);
    }

  //  public Wheather getWeatherDataByCity(String city) {
  //      appProperties.setCity(city);
  //      String url_full=appProperties.getUrl()+ "?q=" + appProperties.getCity() + "&appid=" + appProperties.getKey();
  //      return restTemplate.getForObject(url_full, Wheather.class);
  //  }
}

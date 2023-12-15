package com.LiveWeatherApp.demo.config;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
//
//@Component
@Configuration("appProperties")
@ConfigurationProperties(prefix = "liveweatherapp")
public class WeatherConfiguration {


    private String key;
    private String city;

    private String url;



    public WeatherConfiguration() {
   }


    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getUrl() {        return url;    }

    public void setUrl(String url) {        this.url = url;    }

}

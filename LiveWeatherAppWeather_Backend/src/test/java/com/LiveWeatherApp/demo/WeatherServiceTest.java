package com.LiveWeatherApp.demo;
import com.LiveWeatherApp.demo.config.WeatherConfiguration;
import com.LiveWeatherApp.demo.dto.*;
import com.LiveWeatherApp.demo.service.WeatherService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


@RunWith(SpringRunner.class)
public class WeatherServiceTest {


    @Mock
    private RestTemplate restTemplate;

    @Mock
    private WeatherConfiguration appProperties;

    @InjectMocks
    private WeatherService weatherService;

    @Before
    public void setUp() {
        // Mock AppProperties
        when(appProperties.getUrl()).thenReturn("mocked_url");
        when(appProperties.getKey()).thenReturn("mocked_key");
        when(appProperties.getCity()).thenReturn("mockey_url");
    }

    @Test
    public void getWeatherData(){

        Coord mockedcoord= new Coord();mockedcoord.setLat(52.374); mockedcoord.setLon(4.8897);
        Weather mockedweather= new Weather();mockedweather.setId(800); mockedweather.setMain("Clear"); mockedweather.setDescription("clear sky"); mockedweather.setIcon("01d");
        Main mockedmain= new Main(); mockedmain.setTemp(281.55); mockedmain.setFeelsLike(279.13); mockedmain.setTempMin(280.29); mockedmain.setTempMax(282.53); mockedmain.setPressure(1032); mockedmain.setHumidity(84);
        Wind mockedwind= new Wind(); mockedwind.setSpeed(4.12); mockedwind.setDeg(250);
        Clouds mockedcloud= new Clouds(); mockedcloud.setAll(0);
        Sys mockedsys= new Sys(); mockedsys.setType(2); mockedsys.setId(2046553); mockedsys.setCountry("NL"); mockedsys.setSunrise(1702626233); mockedsys.setSunset(1702654021);
        Wheather mockedwheather= new Wheather(); mockedwheather.setCoord(mockedcoord); mockedwheather.setWeather(Collections.singletonList(mockedweather) ); mockedwheather.setBase("stations");
            mockedwheather.setMain(mockedmain); mockedwheather.setVisibility(10000); mockedwheather.setWind(mockedwind); mockedwheather.setClouds(mockedcloud); mockedwheather.setDt(1702632537);
                mockedwheather.setSys(mockedsys); mockedwheather.setTimezone(3600); mockedwheather.setId(2759794); mockedwheather.setName("Amsterdam"); mockedwheather.setCod(200);



        String mockedUrl = "mocked_url?q=mocked_city&appid=mocked_key";
        when(restTemplate.getForObject(mockedUrl, Wheather.class))
                .thenReturn(mockedwheather);

        Optional<String> mockCity = Optional.of("mocked_city");
        Wheather result = weatherService.getWeatherData(mockCity);

    }
}

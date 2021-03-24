import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import './style.css';
const CityWeather = (props) => {
    return (
        
        <Container>
            <br/>
           {props.cityWeather.cod === 200 ?
           <div><p><strong>{props.cityWeather.name}</strong></p>
           <p>Temperature: <strong>{Math.round(props.cityWeather.main.temp - 273.15)}° Celcius</strong></p>
           <p>Min-Temperature: <strong>{Math.round(props.cityWeather.main.temp_min - 273.15)}° Celcius</strong></p>
           <p>Max-Temperature: <strong>{Math.round(props.cityWeather.main.temp_max - 273.15)}° Celcius</strong></p>
           <p>Wind-speed: <strong>{Math.round(props.cityWeather.wind.speed)} km/hr</strong></p>
           <p>Description: <strong> {props.cityWeather.weather[0].main}</strong></p>
           </div> : null }
        </Container>
       
    );
};

export default CityWeather;
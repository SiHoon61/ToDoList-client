import styled from "styled-components";

import sun from '../../assets/Weather/sun.png';
import rain from '../../assets/Weather/rain.png';
import snow from '../../assets/Weather/snow.png';


export const WeatherContainer = styled.div`
    width: 340px;
    height: 190px;
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-image: ${({ $background }) => {
        if ($background === 'rain') {
            return `url(${rain})`;
        } else if ($background === 'snow') {
            return `url(${snow})`;
        } else {
            return `url(${sun})`
        }
    }};
    padding: 30px;

`

export const City = styled.div`
    font-size: 26px; 
    font-weight: bold; 
    color: white; 
`

export const Temperature = styled.div`
    font-size: 44px; 
    font-weight: bold; 
    color: white; 
`

export const Rainfall = styled.div`
    margin-top: 15px;
    font-size: 16px; 
    font-weight: bold; 
    color: white; 
`

export const Humidity = styled.div`
    margin-top: 5px;
    font-size: 16px; 
    font-weight: bold; 
    color: white; 
`
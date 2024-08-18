import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
    WeatherContainer,
    City,
    Temperature,
    Rainfall,
    Humidity,
} from './style';
const TodayWeather = () => {
    const [data, setData] = useState('sun');
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/`) 
            .then(response => {
                setData(response.data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error); 
            });
    }, []); 

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    // if (!data) {
    //     return <div>Loading...</div>;
    // }
    return (
        <>
            <WeatherContainer $background={data.PrecipitationType}>
                <City>
                    천안시
                    {/* {data.address.city} */}
                </City>
                <Temperature>
                    30.7 °C
                    {/* {data.Temperature} */}
                </Temperature>
                <Rainfall>
                    강수량 0mm
                    {/* {data.1HourRainfall} */}
                </Rainfall>
                <Humidity>
                    습도 76.0 %
                    {/* {data.Humidity} */}
                </Humidity>
            </WeatherContainer>
        </>
    );
};

export default TodayWeather;
import React from 'react';

import {
    WeatherContainer,
    
} from './style';

import MyResponsiveLine from './chart';

const BeforeWeather = () => {
    const sampleData = [
        {
            stnId: "232",
            hm: "90",
            stnNm: "천안",
            tm: "2024-08-17 01:00",
            rn: "",
            ta: "25.5",
            ts: "26.9"
        },
        {
            stnId: "232",
            hm: "93",
            stnNm: "천안",
            tm: "2024-08-17 02:00",
            rn: "",
            ta: "24.9",
            ts: "26.4"
        },
        {
            stnId: "232",
            hm: "92",
            stnNm: "천안",
            tm: "2024-08-17 03:00",
            rn: "",
            ta: "24.5",
            ts: "26.2"
        },
        {
            stnId: "232",
            hm: "92",
            stnNm: "천안",
            tm: "2024-08-17 04:00",
            rn: "",
            ta: "24.5",
            ts: "26.1"
        },
        {
            stnId: "232",
            hm: "92",
            stnNm: "천안",
            tm: "2024-08-17 05:00",
            rn: "",
            ta: "24.6",
            ts: "26.0"
        },
        {
            stnId: "232",
            hm: "92",
            stnNm: "천안",
            tm: "2024-08-17 06:00",
            rn: "",
            ta: "24.5",
            ts: "25.9"
        },
        {
            stnId: "232",
            hm: "86",
            stnNm: "천안",
            tm: "2024-08-17 07:00",
            rn: "",
            ta: "25.7",
            ts: "26.6"
        }
    ]
    
    const data1 = [
        {
            id: "Temperature",
            data: [
                { x: "14시", y: 32 },
                { x: "15시", y: 31 },
                { x: "16시", y: 31 },
                { x: "17시", y: 31 },
                { x: "18시", y: 30 },
                { x: "19시", y: 29 },
                { x: "20시", y: 28 },
                { x: "21시", y: 28 },
                { x: "22시", y: 27 },
                { x: "23시", y: 27 },
                { x: "01시", y: 27 },
                { x: "02시", y: 26 },
            ],
        },
    ];
    return (
        <>
            <WeatherContainer>
                2024-08-17 천안 날씨
                <MyResponsiveLine data = {data1} />
            </WeatherContainer>
        </>
    );
};

export default BeforeWeather;
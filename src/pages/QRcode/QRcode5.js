import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { useRandomValue } from '../../components/RandomValueContext/RandomValueContext';
import {
    BodyContainer,
    Title,
    SubTitle,
    MenuCount,
} from './style';

const QRcode = () => {
    const menu = 'Menu5';
    const [count, setCount] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/menu/count?menuName=${menu}`
                )
                console.log(response.data);
                setCount(response.data);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])

    const randomValue = useRandomValue();
    return (
        <BodyContainer>
            <Title>
                천원의 아침밥 결제 QR
            </Title>
            <SubTitle>
                소고기 쌀국수
            </SubTitle>
            <QRCode
                value={`${process.env.REACT_APP_QR_URL}/verification?menu=${menu}&code=${randomValue}`}
                size={256}
            />
            <MenuCount>
                {count}/100
            </MenuCount>
        </BodyContainer>
    );
};

export default QRcode;
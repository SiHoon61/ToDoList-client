import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//link
import { KAKAO_LINK } from '../../config/config';

//style
import {
    LogoBox,
    Logo,
    LoginButton,
} from './style';
import TodayWeather from '../../components/TodayWeather/TodayWeather';

const Login = () => {
    const kakaoLoginHandler = () => {
        window.location.href = KAKAO_LINK;
    };

    const handleButtonClick = async () => {
        const postData = {
            name: 'John Doe',
            age: 30,
        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/test`, postData);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('There was an error making the request:', error);
        }
    };
    const navigate = useNavigate();

    const handleQrClick = () => {
        navigate("/qrcode_1");
    };

    return (
        <>
            <LogoBox>
                <Logo>
                    ToDoList
                </Logo>
                <LoginButton onClick={kakaoLoginHandler} />
            </LogoBox>
            <button onClick={handleButtonClick}>테스트</button>
            <button onClick={handleQrClick}>qr링크</button>
        
        </>
    );
};

export default Login;

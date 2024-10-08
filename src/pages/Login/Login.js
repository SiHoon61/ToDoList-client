import React from 'react';
import axios from 'axios';

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

    return (
        <>
            <LogoBox>
                <Logo>
                    ToDoList
                </Logo>
                <LoginButton onClick={kakaoLoginHandler} />
            </LogoBox>
            <button onClick={handleButtonClick}>테스트</button>
        </>
    );
};

export default Login;
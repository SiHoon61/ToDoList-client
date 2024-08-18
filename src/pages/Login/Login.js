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
    const testHandler = () => {
        const handleButtonClick = () => {
            const postData = {
                name: 'hoon',
                age: 25,
            };

            axios.post(`${process.env.REACT_APP_SERVER_URL/test}`, postData)
                .then(response => {
                    console.log('Response:', response.data);
                })
                .catch(error => {
                    console.error('There was an error making the request:', error);
                });
        };
    }
    return (
        <>
            <LogoBox>
                <Logo>
                    ToDoList
                </Logo>
                <LoginButton onClick={kakaoLoginHandler} />
            </LogoBox>
            <button onClick={testHandler}>테스트</button>
        </>
    );
};

export default Login;
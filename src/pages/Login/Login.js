import React from 'react';

//weather
import Weather from '../../components/Weather/Weather';

//link
import { KAKAO_LINK } from '../../config/config';

//style
import {
    LogoBox,
    Logo,
    LoginButton,
} from './style';

const Login = () => {
    const kakaoLoginHandler = () => {
        window.location.href = KAKAO_LINK;
    };
    return (
        <>
            <LogoBox>
                <Logo>
                    ToDoList
                </Logo>
                <LoginButton onClick={kakaoLoginHandler} />
                <Weather />
            </LogoBox>
            
        </>
    );
};

export default Login;
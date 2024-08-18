import React from 'react';

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
            </LogoBox>
        </>
    );
};

export default Login;
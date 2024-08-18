import styled from 'styled-components';
import kakaoLogin from '../../assets/Login/kakaoLogin.png' 

export const LogoBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Logo = styled.div`
    font-size: 64px;
    margin-top: 100px;
`

export const LoginButton = styled.img.attrs({
    src: kakaoLogin,
    alt: 'logo'
})`
    margin-top: 50px;
    width: 400px;
    cursor: pointer;
`
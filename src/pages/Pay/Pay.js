import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import {
    Container,
    Title,
    Button,
    ButtonText
} from './style';

const Pay = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const menu = location.state;

    const fetchData = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/payment/complete`, {}, {
                params: {
                    menuName: menu,
                },
            });
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    const onClickPayment = () => {
        console.log(menu);
        const { IMP } = window;
        IMP.init(`${process.env.REACT_APP_IMP}`); // 포트원에서 발급받은 가맹점 식별코드 입력

        const data = {
            pg: 'html5_inicis', // PG사 선택 (예: html5_inicis, kakaopay 등)
            pay_method: 'card', // 결제수단 (예: card, trans 등)
            merchant_uid: `mid_${new Date().getTime()}`, // 가맹점에서 생성한 고유 주문번호
            name: '천원의 아침밥',
            amount: '100', // 결제 금액
            buyer_email: 'test@test.com',
            buyer_name: '홍길동',
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시 강남구 삼성동',
            buyer_postcode: '123-456',
            m_redirect_url: 'https://to-do-list-client-two.vercel.app/complete'
        };

        IMP.request_pay(data, callback);
    };

    const callback = (response) => {
        const { success, error_msg } = response;
        if (success) {
            fetchData();
        } else {
            console.error(`결제에 실패하였습니다. 오류 내용: ${error_msg}`);
        }
        // 결제 결과와 관계없이 무조건 리다이렉트
        navigate('/complete');
    };

    useEffect(() => {
        onClickPayment();
    }, []); // 컴포넌트가 마운트될 때 결제 실행

    return (
        <Container>
            <Title>결제가 진행중입니다. 잠시만 기다려주세요</Title>
        </Container>
    );
};

export default Pay;
import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import {
    Container,
    Title,
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

    useEffect(() => {
        const onClickPayment = () => {
            // 아임포트 결제 모듈 불러오기
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
            };

            IMP.request_pay(data, callback);
        };

        const callback = (response) => {
            const { success, error_msg } = response;
            if (success) {
                fetchData();
                navigate('/complete');
            } else {
                alert(`결제에 실패하였습니다. 오류 내용: ${error_msg}`);
            }
        };

        onClickPayment();
    }, []); 

    return (
        <Container>
            <Title>결제가 진행중입니다. 잠시만 기다려주세요</Title>
        </Container>
    );
};

export default Pay;
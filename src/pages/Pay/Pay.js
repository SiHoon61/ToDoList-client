import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Pay = () => {
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/payment/complete`, {
                params: {
                    menuName: 'Menu1',
                },
            });
            console.log(response.data); 
        } catch (err) {
            console.log(err.message); 
        }
    };

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
            fetchData()
            navigate('/complete');
        } else {
            alert(`결제에 실패하였습니다. 오류 내용: ${error_msg}`);
        }
    };
    return (
        <div>
            <h1>결제 테스트</h1>
            <button onClick={onClickPayment}>결제하기</button>
        </div>
    );
};

export default Pay;
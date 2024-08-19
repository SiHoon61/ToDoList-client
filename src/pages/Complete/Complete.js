import React, {useEffect} from 'react';
import axios from 'axios';

const Complete = () => {
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/payment/complete`, {}, {
                    params: {
                        menuName: "Menu1",
                    },
                });
                console.log(response.data);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData(); // 컴포넌트 마운트 시 fetchData 함수 실행
    }, []); // 빈 배열을 의존성 배열로 전달하여 한 번만 실행되도록 설정
    return (
        <>
            결제가 완료되었습니다. 감사합니다.
        </>
    );
};

export default Complete;
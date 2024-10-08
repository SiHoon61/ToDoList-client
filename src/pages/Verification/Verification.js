import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRandomValue } from '../../components/RandomValueContext/RandomValueContext';

const Verification = () => {
    const navigate = useNavigate();
    const randomValue = useRandomValue();
    const url = new URL(window.location.href);
    const menuValue = url.searchParams.get("menu");
    const code = url.searchParams.get("code");
    if (parseInt(code, 10) === (randomValue-1)) {
        navigate('/pay', { state: menuValue });
    }
    return (
        <h3>
            만료된 QR코드입니다. 다시 시도해주세요<br />
        </h3>
    );
};

export default Verification;
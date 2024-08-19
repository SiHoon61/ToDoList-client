import React from 'react';
import QRCode from 'qrcode.react';
import { useRandomValue } from '../../components/RandomValueContext/RandomValueContext';
import {
    BodyContainer,
    Title,
} from './style';

const QRcode = () => {
    const randomValue = useRandomValue();
    return (
        <BodyContainer>
            <Title>
                천원의 아침밥 결제 QR
            </Title>
            <QRCode
                value={`http://192.168.0.104:3000/verification?menu=Menu1&code=${randomValue}`}
                size={256}
            />
            {randomValue}
        </BodyContainer>
    );
};

export default QRcode;
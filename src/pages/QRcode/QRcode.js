import React from 'react';

import {
    BodyContainer,
    Title,
    QRImg,
} from './style';

import qrimg from '../../assets/qrimg.png';

const QRcode = () => {
    return (
        <BodyContainer>
            <Title>
                천원의 아침밥 결제 QR
            </Title>
            <QRImg src={qrimg} alt="qrimg">
                
            </QRImg>
        </BodyContainer>
    );
};

export default QRcode;
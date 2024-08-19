import React from 'react';
import QRCode from 'qrcode.react';

import {
    BodyContainer,
    Title,

} from './style';

const QRcode = () => {
    return (
        <BodyContainer>
            <Title>
                천원의 아침밥 결제 QR
            </Title>
            <QRCode
                value={"www.naver.com"}
                size={256}
            />
        </BodyContainer>
    );
};

export default QRcode;
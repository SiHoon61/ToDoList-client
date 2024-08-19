import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SocketTest() {
    const clickHandler = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/payment/complete`,
                {},
                {
                    params: {
                        menuName: 'Menu1',
                    },
                });
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    const [message, setMessage] = useState('');

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080/ws');

        socket.onmessage = (event) => {
            setMessage(event.data);
        };

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <button onClick={() => clickHandler}>신호 전송</button>
            <h1>Real-time Message</h1>
            <p>{message}</p>
        </div>
    );
}

export default SocketTest;
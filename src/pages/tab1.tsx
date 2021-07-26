import React from 'react';
import { Button } from '@sberdevices/plasma-ui/components/Button/Button';
import { Container, Row, Col }  from '@sberdevices/plasma-ui';

export const Tab1 = ({ assistant, dispatch }: any) => {
    const click = () => () => {
        assistant.sendData({ action: { action_id: 'CLICK' } });
    };

    const click2 = () => () => {
        assistant.sendData({ action: { action_id: 'SELECT', parameters: { tab: 1 } } });
    };

    const click3 = () => () => {
        dispatch({type: 'SELECT', tab: 1});
    };

    return (
        <Container>
            <Row>
                <Col size={4}>
                    <Button text="Текст" view="primary" size="s" onClick={click()} />
                </Col>
                <Col size={4}>
                    <Button text="Переключить вкладку через бэк" view="primary" size="s" onClick={click2()} />
                </Col>
            </Row>
            <Row>
                <Col size={4}>
                    <Button text="Переключить вкладку не через бэк" view="primary" size="s" onClick={click3()} />
                </Col>
            </Row>
        </Container>
    )
}

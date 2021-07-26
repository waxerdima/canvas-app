import React, { FC, memo, useReducer, useEffect } from 'react';
import { Tabs, TabItem } from '@sberdevices/plasma-ui/components/Tabs/Tabs';
import { Container, Row, Col }  from '@sberdevices/plasma-ui';
import './App.css';
import { Tab1 } from './pages/tab1';
import { Tab2 } from './pages/tab2';
import { reducer } from './store';
import { initAssistant } from './assistant';

export const App: FC = memo(() => {
    const [appState, dispatch] = useReducer(reducer, {
        currentTab: 0
    });

    useEffect(() => {
        initAssistant(dispatch);
    }, []);

    const action = (text:any) => () => {
        console.log(text);
    }

    const route = () => {
        switch (appState.currentTab) {
            case 0:
                return <Tab1 dispatch={dispatch} />;
            case 1:
                return <Tab2 />;
        }
    }

    return (
        <main className="app">
            <Tabs
                size='l'
                view='secondary'
                stretch={true}
                pilled={false}
                scaleOnPress={true}
                outlined={false}
                disabled={false}
            >
                <TabItem
                    key={`item0`}
                    isActive={appState.currentTab === 0}
                    tabIndex={0}
                    contentLeft={true}
                    onClick={() => dispatch({type: 'SELECT', tab: 0})}
                    onFocus={action(`onFocus item #${0}`)}
                    onBlur={action(`onBlur item #${0}`)}
                >
                    Таб 1
                </TabItem>
                <TabItem
                    key={`item1`}
                    isActive={appState.currentTab === 1}
                    tabIndex={1}
                    contentLeft={true}
                    onClick={() => dispatch({type: 'SELECT', tab: 1})}
                    onFocus={action(`onFocus item #${1}`)}
                    onBlur={action(`onBlur item #${1}`)}
                >
                    Таб 2
                </TabItem>
            </Tabs>
            <Container>
                <Row>
                    <Col size={4}>
                        {route()}
                    </Col>
                </Row>
            </Container>
        </main>
    );
});

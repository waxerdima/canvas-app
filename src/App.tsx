import React, { FC, memo, useReducer, useState, useRef, useEffect } from 'react';
import { createSmartappDebugger, createAssistant, AssistantAppState } from '@sberdevices/assistant-client';
import { Tabs, TabItem } from '@sberdevices/plasma-ui/components/Tabs/Tabs';
import { Container, Row, Col }  from '@sberdevices/plasma-ui';
import './App.css';
import { Tab1 } from './pages/tab1';
import { Tab2 } from './pages/tab2';
import { reducer } from './store';

const initializeAssistant = (getState: any) => {
    if (process.env.NODE_ENV === 'development' && window.Cypress == null) {
        return createSmartappDebugger({
            token: process.env.REACT_APP_TOKEN ?? '',
            initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
            getState,
        });
    }

    return createAssistant({ getState });
};

export const App: FC = memo(() => {
    const [appState, dispatch] = useReducer(reducer, {
        currentTab: 0
    });

    const assistantStateRef = useRef<AssistantAppState>();
    const assistantRef = useRef<ReturnType<typeof createAssistant>>();

    useEffect(() => {
        console.log('appState111', appState);
    }, [appState]);

    useEffect(() => {
        assistantRef.current = initializeAssistant(() => assistantStateRef.current);

        assistantRef.current.on('data', ({ navigation, action }: any) => {
            if (navigation) {
                switch (navigation.command) {
                    case 'UP':
                        window.scrollTo(0, window.scrollY - 500);
                        break;
                    case 'DOWN':
                        window.scrollTo(0, window.scrollY + 500);
                        break;
                }
            }

            console.log('action', action);
            if (action) {
                dispatch(action);
            }
        });
    }, []);

    const action = (text:any) => () => {
        console.log(text);
    }

    const route = () => {
        switch (appState.currentTab) {
            case 0:
                return <Tab1 dispatch={dispatch} assistant={assistantRef.current} />;
            case 1:
                return <Tab2 {...assistantRef.current} dispatch={dispatch} />;
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

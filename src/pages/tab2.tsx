import React from 'react';
import { Button } from '@sberdevices/plasma-ui/components/Button/Button';
import { IconDownload } from '@sberdevices/plasma-icons';
import { sendData } from '../assistant';

export const Tab2 = () => {
    const click = () => () => {
        sendData({ action: { action_id: 'DOWNLOAD', parameters: { file: 'text.txt' } } });
    };
    return (
        <Button text="Скачать" view="primary" contentRight={<IconDownload />} size="s" onClick={click()} />
    )
}

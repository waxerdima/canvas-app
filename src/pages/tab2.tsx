import React from 'react';
import { Button } from '@sberdevices/plasma-ui/components/Button/Button';
import { IconDownload } from '@sberdevices/plasma-icons';

export const Tab2 = (assistant: any) => {
    const click = () => () => {
        assistant.sendData({ action: { action_id: 'DOWNLOAD', parameters: { file: 'text.txt' } } });
    };
    return (
        <Button text="Скачать" view="primary" contentRight={<IconDownload />} size="s" onClick={click()} />
    )
}

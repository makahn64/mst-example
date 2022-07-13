import React from 'react';
import { observer } from 'mobx-react-lite';
import { useApplicationState } from '../state/MSTProvider';
 
type Props = {
    onClick: () => void;
    label: string;
}

export const ThemedButton = observer(({ onClick, label }: Props)  => {

    const state = useApplicationState();
    const { button } = state;

    const style = { margin: 10, padding: 3, borderRadius: 5, borderColor: 'white', ...button.CSS };

    return (
        <div onClick={onClick} style={style}>
            <p>{label}</p>
        </div>
    )
});
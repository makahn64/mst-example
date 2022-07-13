import React from 'react';
 
type Props = {
    onClick: () => void;
    color?: string;
    label: string;
}

export const Button = ({ onClick, color = 'blue', label }: Props)  => {
    return (
        <div onClick={onClick} style={{ margin: 10, backgroundColor: color, padding: 10, borderRadius: 5 }}>
            <p>{label}</p>
        </div>
    )
}
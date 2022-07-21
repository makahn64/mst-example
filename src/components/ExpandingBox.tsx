import React, { useState } from 'react';

type Dims = { width: number, height: number };

type Props = { color?: string };

export const ExpandableBox = ({ color = 'MediumAquamarine' }: Props) =>  {

    const [ dims, setDims ] = useState<Dims>({width: 120, height: 120 });

    const handleWider = () => {
        setDims({ width: dims.width + 120, height: dims.height })
    }

    const handleNarrow = () => {
        setDims({ width: Math.max(dims.width - 120, 120), height: dims.height })
    }

    const handleTaller = () => {
        setDims({ width: dims.width, height: dims.height + 120 })
    }

    const handleShorter = () => {
        setDims({ width: dims.width, height: Math.max(dims.height-120, 120) })
    }

    const controlHolderStyle = { display: 'flex', flex: 1, justifyContent: 'space-between', margin: 10};

    return (
        <div style={{ width: dims.width, height: dims.height, backgroundColor: color, margin: '10px', transition: 'width 1s, height 1s'}}>
            <div style={controlHolderStyle}>
                <span onClick={handleNarrow}>◀️</span>
                <span onClick={handleWider}>▶️</span>
            </div>
            <div style={controlHolderStyle}>
                <span onClick={handleShorter}>🔽</span>
                <span onClick={handleTaller}>🔼</span>
            </div>
        </div>

    )

}



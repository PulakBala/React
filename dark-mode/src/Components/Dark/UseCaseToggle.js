import React, { useState } from 'react';

const UseCaseToggle = () => {
    const [mode, setMode] = useState(false);
    const clickHnadler = () =>{
        setMode(!mode)
    }
    const toggledClass = mode ? light : dark;
    return (
        <div className={toggledClass}>
            <h1>Hi</h1>
            <button onClick={clickHnadler}>Toggle displaye mode</button>
        </div>
    );
};

export default UseCaseToggle;
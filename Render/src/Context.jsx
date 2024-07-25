import React, { Children, createContext, useState } from 'react';
import {Cont,ContA} from './Cont';

// Create the context outside the component
const CountContext = createContext();

export function Context({Children}) {
    const [count, setCount] = useState(0);

    const handelClick = () => {
        setCount(prev => prev + 1);
    };

    return (
        <div>
            Context
            <button onClick={handelClick}>count : {count}</button>
            <CountContext.Provider value={{ count }}>
                {Children}
            </CountContext.Provider>
        </div>
    );
}

//export default Context({Children});
export { CountContext };

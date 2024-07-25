import React, { useContext } from 'react';
import { CountContext } from './Context';

function Cont() {
    const { count } = useContext(CountContext);
console.log("sumit")
    return (
        <div>
            Cont Component
            <h1>Count: {count}</h1>
        </div>
    );
}
function ContA() {
   // const { count } = useContext(CountContext);
console.log("sumit AAAA")
    return (
        <div>
            Cont Component
            <h1>Count: A</h1>
        </div>
    );
}
export{Cont,ContA}

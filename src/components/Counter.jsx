import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    let disableButton = false;

    if (count <= 0) {
        disableButton = true;
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)} disabled={disableButton}>Decrement</button>
            <button onClick={() => setCount(0)}>Set to 0</button>
        </div>
    );
};

export default Counter
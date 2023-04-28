//Counter.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Counter(props) {
    let [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return(
        <div style={{textAlign: 'center'}}>
            <h3>Counter App</h3>
            <div>
              <Button variant="contained" onClick={decrement}>-</Button> 
                <span> {count} </span>
              <Button variant="contained" onClick={increment}>+</Button>
            </div>
        </div>
    );
};

export default Counter;
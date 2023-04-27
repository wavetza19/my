import React, { useState } from 'react';
const Counter = ()=>{
    const [count, setCount] = useState(0);
    const [value,setValue]= useState("type here!");
    const onTextChange=(event)=>{
        setValue(event.target.value);
    }
    return (<>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        <p>You clicked {count} times</p>
        <input 
            type="text"
            value={value}
            onChange={event=>onTextChange(event)}
        />
        <h3>{value.length}</h3>
        <div
            onClick={e => console.log('onClick')}
            onMouseEnter={e => console.log('onMouseEnter')}
            onMouseOver={e => console.log('onMouseOver')}
            onMouseDown={e => console.log('onMouseDown')}
            onMouseUp={e => console.log('onMouseUp')}
            onMouseLeave={e => console.log('onMouseLeave')}
            >Event Handler</div>
    </>);
}
export default Counter;
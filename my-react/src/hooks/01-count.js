import React,{useState} from 'react'
function App(){
    const [count,setCount] = useState(1)
    return (
        <div className="App">
          Count: {count}
          <button onClick={() => setCount(count+1)}>+</button>
          <button onClick={() => setCount(count-1)}>-</button>
        </div>
      );
}
export default App;
import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [count, setCount] = useState(1);
  const [tempClass, setTempClass] = useState('');

  function increaseFn() {
    setCount(count => count + 1);
  }

  function decreaseFn() {
    setCount(count => count - 1);
  }

  useEffect(() => {
    if (count % 5 == 0 && count % 3 == 0) {
      setTempClass('fizzbuzz')
    } else if (count % 3 == 0) {
      setTempClass('fizz')
    } else if (count % 5 == 0) {
      setTempClass('buzz')
    } else {
      setTempClass('normal')
    }
  })

  return (
    <div id="main">
      <button onClick={increaseFn}>Increase</button>
      <div className={tempClass}>{count}</div>
      <button onClick={decreaseFn}>Decrease</button>
    </div>
  )
}

export default App;

```javascript
import { useState, useEffect, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const updateCount = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  useEffect(() => {
    console.log('Mounted!');
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={updateCount}>Click me</button>
    </div>
  );
}

export default MyComponent;
```
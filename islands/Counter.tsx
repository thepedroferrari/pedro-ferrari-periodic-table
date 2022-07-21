/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { elements } from '../constants/constants.ts';

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  console.log(
    Object.values(elements).filter(
      (element) => element.category === 'want-to-learn'
    )
  );
  const [count, setCount] = useState(props.start);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        disabled={!IS_BROWSER}
      >
        -1
      </button>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        disabled={!IS_BROWSER}
      >
        +1
      </button>
    </div>
  );
}

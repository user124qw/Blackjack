import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [runningCount, setRunningCount] = useState(0);
  const [decksRemaining, setDecksRemaining] = useState(6.0);

  const trueCount = parseFloat((runningCount / decksRemaining).toFixed(2));
  const houseEdge = parseFloat((-0.5 + 0.5 * trueCount).toFixed(2));

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Card Counter</h1>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setRunningCount(runningCount + 1)}>+1</button>
        <button onClick={() => setRunningCount(runningCount)}>0</button>
        <button onClick={() => setRunningCount(runningCount - 1)}>-1</button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setDecksRemaining(Math.min(10, parseFloat((decksRemaining + 0.1).toFixed(1))))}>
          + Deck
        </button>
        <button onClick={() => setDecksRemaining(Math.max(0.1, parseFloat((decksRemaining - 0.1).toFixed(1))))}>
          - Deck
        </button>
        <p>Decks Remaining: {decksRemaining}</p>
      </div>

      <h2>Running Count: {runningCount}</h2>
      <h2>True Count: {trueCount}</h2>
      <h2>House Edge: {houseEdge}%</h2>
    </div>
  );
}

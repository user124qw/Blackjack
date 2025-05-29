<details>
<summary>Haz clic para ver <code>index.js</code></summary>
<details>
<summary>Haz clic para ver <code>index.js</code></summary>
import { useState } from 'react';
import { useRouter } from 'next/router';
import translations from '../locales';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations['en'];

  const [runningCount, setRunningCount] = useState(0);
  const [decksRemaining, setDecksRemaining] = useState(6.0);

  const trueCount = parseFloat((runningCount / decksRemaining).toFixed(2));
  const houseEdge = parseFloat((-0.5 + 0.5 * trueCount).toFixed(2));

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>{t.title}</h1>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setRunningCount(runningCount + 1)}>+1</button>
        <button onClick={() => setRunningCount(runningCount)}>0</button>
        <button onClick={() => setRunningCount(runningCount - 1)}>-1</button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setDecksRemaining(Math.min(10, parseFloat((decksRemaining + 0.1).toFixed(1))))}>
          {t.increaseDeck}
        </button>
        <button onClick={() => setDecksRemaining(Math.max(0.1, parseFloat((decksRemaining - 0.1).toFixed(1))))}>
          {t.decreaseDeck}
        </button>
        <p>{t.decksRemaining}: {decksRemaining}</p>
      </div>

      <h2>{t.runningCount}: {runningCount}</h2>
      <h2>{t.trueCount}: {trueCount}</h2>
      <h2>{t.houseEdge}: {houseEdge}%</h2>

      <div style={{ marginTop: 30 }}>
        <label>{t.changeLang}:</label>
        <select onChange={(e) => router.push('/', '/', { locale: e.target.value })} value={locale}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
          <option value="ru">Русский</option>
          <option value="ja">日本語</option>
          <option value="zh">中文</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>
    </div>
  );
}
</details>

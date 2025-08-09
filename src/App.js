import React, { useState } from 'react';
import './App.css';

// Simple cognitive game example: Pattern memory game
function PatternMemoryGame() {
  const [pattern, setPattern] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [level, setLevel] = useState(0);
  const [message, setMessage] = useState('Press Start to begin');
  const colors = ['red', 'blue', 'green', 'yellow'];

  function nextLevel() {
    const nextColor = colors[Math.floor(Math.random() * colors.length)];
    setPattern([...pattern, nextColor]);
    setUserInput([]);
    setLevel(level + 1);
    setMessage(`Level ${level + 1}: Repeat the pattern`);
  }

  function handleClick(color) {
    const newUserInput = [...userInput, color];
    setUserInput(newUserInput);

    if (pattern[newUserInput.length - 1] !== color) {
      setMessage(`Wrong! Game over at level ${level}. Press Start to try again.`);
      setPattern([]);
      setUserInput([]);
      setLevel(0);
      return;
    }

    if (newUserInput.length === pattern.length) {
      setMessage('Correct! Get ready for the next level.');
      setTimeout(() => nextLevel(), 1000);
    }
  }

  return (
    <div className="game-container">
      <h2>Pattern Memory Game</h2>
      <div className="buttons">
        {colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <p>{message}</p>
      {level === 0 && (
        <button onClick={nextLevel} className="start-btn">
          Start
        </button>
      )}
    </div>
  );
}

// Simple cognitive test replacement (clock drawing test simplified)
function CognitiveTest() {
  const [timeInput, setTimeInput] = useState('');
  const [result, setResult] = useState(null);

  function checkAnswer() {
    // Simple check: Accept “10:10” as correct answer
    if (timeInput.trim() === '10:10') {
      setResult('Correct! Your clock drawing is good.');
    } else {
      setResult('Incorrect. Try drawing 10:10 on your clock.');
    }
  }

  return (
    <div className="test-container">
      <h2>Cognitive Test: Clock Drawing</h2>
      <p>Draw the clock showing 10:10. Type what you drew:</p>
      <input
        type="text"
        value={timeInput}
        onChange={(e) => setTimeInput(e.target.value)}
        placeholder="e.g., 10:10"
      />
      <button onClick={checkAnswer}>Check</button>
      {result && <p>{result}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Cognitive Game & Test App</h1>
      <PatternMemoryGame />
      <CognitiveTest />
      <footer>
        <p>© 2025 Cognitive App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

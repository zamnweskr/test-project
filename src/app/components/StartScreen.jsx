import React from 'react';

const StartScreen = ({ onStartGame }) => {
  return (
    <div className="start-screen">
      <h1 className={"start-title"}>A Game About WORDS !</h1>
      <p>Can you find your way to a win?</p>
      <button onClick={onStartGame}>
        Start Game
      </button>
    </div>
  );
};


export default StartScreen;
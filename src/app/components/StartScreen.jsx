const StartScreen = ({ onStartGame }) => {
    return (
        <div className="start-screen">
            <h1 className={"start-title"}>WORD?!</h1>
            <p>Create the words on screen by clicking the letters to rearrange them. Match all 5 words before the time runs out!
            <br />
            <br />
                Move letters by swapping them with adjacent letters to form words, letters can be arranged horizontally or vertically, but not diagonally!
            </p>
            <button onClick={onStartGame}>
                Start Game
            </button>
        </div>
    );
};


export default StartScreen;
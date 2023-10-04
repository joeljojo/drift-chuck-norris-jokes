const JokeDisplay = ({ joke }) => {
  return (
    <div className="joke-card">
      <p className="joke-text">{joke}</p>
    </div>
  );
};
export default JokeDisplay;

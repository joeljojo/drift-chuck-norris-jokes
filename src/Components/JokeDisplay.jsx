const JokeDisplay = ({ joke, error, loading }) => {
  return (
    <div className="joke-card">
      {loading ? (
        <p className="joke-text">Loading...</p>
      ) : error ? (
        <p className="error-message">{error?.message}</p>
      ) : (
        <p className="joke-text">{joke}</p>
      )}
    </div>
  );
};
export default JokeDisplay;

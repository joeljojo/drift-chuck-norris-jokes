const JokeSearch = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by keyword"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        required
      />
      <button onClick={handleSearch}>Seach</button>
    </div>
  );
};
export default JokeSearch;

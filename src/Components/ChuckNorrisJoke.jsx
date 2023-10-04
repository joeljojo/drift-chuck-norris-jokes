import { useState, useEffect } from "react";
import JokeDisplay from "./JokeDisplay";
import JokeCategory from "./JokeCategory";
import chuckNorrisApi from "../Services/ChuckNorrisApi";
import JokeSearch from "./JokeSearch";

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState("");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomJoke = async () => {
    try {
      setLoading(true);
      const randomJoke = await chuckNorrisApi.fetchRandomJoke();
      setJoke(randomJoke.value);
      setCategory("");
      setSearchQuery("");
      setError(null); // Clears previous error
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getJokeByCategory = async () => {
    try {
      setLoading(true);
      setError(null);
      if (category) {
        const jokeInCategory = await chuckNorrisApi.fetchJokeByCategory(
          category
        );
        setJoke(jokeInCategory.value);
        setSearchQuery("");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);

      setError(null);
      if (searchQuery) {
        const searchResult = await chuckNorrisApi.searchJokes(searchQuery);
        setJoke(searchResult.value);
        setCategory("");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <div className="container">
      <h1>Chuck Norris Jokes</h1>
      <div className="category-search-container">
        <JokeSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        <JokeCategory
          category={category}
          setCategory={setCategory}
          getJokeByCategory={getJokeByCategory}
        />
      </div>
      <JokeDisplay joke={joke} error={error} loading={loading} />
      <button onClick={getRandomJoke}>Get Ramdom Joke</button>
    </div>
  );
};
export default ChuckNorrisJoke;

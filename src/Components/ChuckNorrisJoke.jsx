import { useState, useEffect } from "react";
import JokeDisplay from "./JokeDisplay";
import JokeCategory from "./JokeCategory";
import chuckNorrisApi from "../Services/ChuckNorrisApi";
import JokeSearch from "./JokeSearch";

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState("");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getRandomJoke = async () => {
    const randomJoke = await chuckNorrisApi.fetchRandomJoke();
    setJoke(randomJoke.value);
  };

  const getJokeByCategory = async () => {
    if (category) {
      const jokeInCategory = await chuckNorrisApi.fetchJokeByCategory(category);
      setJoke(jokeInCategory.value);
    }
  };

  const handleSearch = async () => {
    if (searchQuery) {
      const searchResult = await chuckNorrisApi.searchJokes(searchQuery);
      setJoke(searchResult.value);
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
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
      <JokeDisplay joke={joke} />
      <button onClick={getRandomJoke}>Get Ramdom Joke</button>
    </div>
  );
};
export default ChuckNorrisJoke;

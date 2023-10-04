import { useState, useEffect } from "react";
import JokeDisplay from "./JokeDisplay";
import chuckNorrisApi from "../Services/ChuckNorrisApi";

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState("");

  const getRandomJoke = async () => {
    const randomJoke = await chuckNorrisApi.fetchRandomJoke();
    setJoke(randomJoke.value);
  };

  useEffect(() => {
    getRandomJoke();
  }, []);
  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      <JokeDisplay joke={joke} />
      <button onClick={getRandomJoke}>Get Ramdom Joke</button>
    </div>
  );
};
export default ChuckNorrisJoke;

import { useState, useEffect } from "react";
import chuckNorrisApi from "../Services/ChuckNorrisApi";

const JokeCategory = ({ category, setCategory, getJokeByCategory }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const jokeCategories = await chuckNorrisApi.fetchCategories();
    setCategories(jokeCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="joke-categories">
      <label htmlFor="categories">Search joke by category</label>
      <div className="select-category">
        <select
          name="categories"
          id="categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          {categories?.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button onClick={getJokeByCategory}>Get Joke</button>
      </div>
    </div>
  );
};
export default JokeCategory;

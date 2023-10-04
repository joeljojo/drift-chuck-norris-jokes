const API_BASE_URL = "https://api.chucknorris.io";

async function fetchRandomJoke() {
  const response = await fetch(`${API_BASE_URL}/jokes/random`);
  if (!response.ok) {
    throw new Error(
      "An error occurred while fetching jokes. Please try again later."
    );
  }
  const data = await response.json();
  return data;
}

async function fetchJokeByCategory(category) {
  const response = await fetch(
    `${API_BASE_URL}/jokes/random?category=${category}`
  );
  if (!response.ok) {
    throw new Error(
      "An error occurred while fetching jokes. Please try again later."
    );
  }
  const data = await response.json();
  return data;
}

async function fetchCategories() {
  const response = await fetch(`${API_BASE_URL}/jokes/categories`);
  if (!response.ok) {
    throw new Error(
      "An error occurred while fetching jokes. Please try again later."
    );
  }
  const data = await response.json();
  return data;
}

async function searchJokes(query) {
  const response = await fetch(`${API_BASE_URL}/jokes/search?query=${query}`);
  if (!response.ok) {
    throw new Error(
      "An error occurred while fetching jokes. Please try again later."
    );
  }
  const data = await response.json();
  if (data.total > 0) {
    // Randomly select one of the search results
    const randomIndex = Math.floor(Math.random() * data.result.length);
    return data.result[randomIndex];
  }
  return { value: "No matching jokes found" };
}
const chuckNorrisApi = {
  fetchRandomJoke,
  fetchJokeByCategory,
  fetchCategories,
  searchJokes,
};
export default chuckNorrisApi;

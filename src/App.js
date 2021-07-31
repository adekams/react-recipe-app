import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const APP_ID = "e548faf6";
  const APP_KEY = "7c162d952ebdd01c037805155c10a4a6";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cake");

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  const apiReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const fetchRecipes = async () => {
    const { data } = await axios.get(apiReq);
    const { hits } = await data;

    // console.log(hits);
    setRecipes(hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <form onSubmit={fetchSearch}>
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button>Get Recipe</button>
      </form>

    </>
  );
}

export default App;

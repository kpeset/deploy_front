import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const getMovies = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/movies`)
      .then((response) => setData(response.data));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>Cinema</h1>
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

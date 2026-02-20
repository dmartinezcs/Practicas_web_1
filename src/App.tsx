import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList/CharacterList";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import type{ Character } from "./types/Character";
import { fetchCharacters, PEOPLE_ENDPOINT } from "./api/api";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(
    PEOPLE_ENDPOINT
  );

  const loadCharacters = async (url: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchCharacters(url);

      setCharacters((prev) => [...prev, ...data.results]);

      setNextPage(data.next);
    } catch (err) {
      setError("Hubo un problema cargando los personajes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (nextPage) {
      loadCharacters(nextPage);
    }
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Star Wars Characters
      </h1>

      {error && <Error message={error} />}
      <CharacterList characters={characters} />
      {loading && <Loader />}

      {!loading && nextPage && (
        <div style={{ textAlign: "center", margin: "1rem" }}>
          <button onClick={() => loadCharacters(nextPage)}>
            Siguiente Página
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
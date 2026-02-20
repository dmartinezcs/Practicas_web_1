import { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import type { Character, ApiResponse } from "../../types/Character";
import "./style.css";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        if (!response.ok) {
          throw new Error("Error al obtener los personajes");
        }

        const data: ApiResponse = await response.json();
        setCharacters(data.results);
      } catch (err) {
        setError("Hubo un problema cargando los datos");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <p>Cargando personajes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={containerStyle}>
      {characters.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

export default CharacterList;
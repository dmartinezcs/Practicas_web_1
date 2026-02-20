import { type Character } from "../../types/Character";

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <div style={cardStyle}>
      <h2>{character.name}</h2>
      <p><strong>Altura:</strong> {character.height}</p>
      <p><strong>Peso:</strong> {character.mass}</p>
      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Año de nacimiento:</strong> {character.birth_year}</p>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "1rem",
  margin: "0.5rem",
  width: "250px",
  backgroundColor: "#f4f4f4",
};

export default CharacterCard;
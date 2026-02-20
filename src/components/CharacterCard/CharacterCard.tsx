import { type Character } from "../../types/Character";
import "./style.css";

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <p><strong>Altura:</strong> {character.height} cm</p>
      <p><strong>Peso:</strong> {character.mass} kg</p>
      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Año de nacimiento:</strong> {character.birth_year}</p>
    </div>
  );
};


export default CharacterCard;
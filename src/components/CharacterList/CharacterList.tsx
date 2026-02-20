import type { Character } from "../../types/Character";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./style.css";

interface Props {
  characters: Character[];
}

const CharacterList = ({ characters }: Props) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard
          key={character.name}
          character={character}
        />
      ))}
    </div>
  );
};

export default CharacterList;
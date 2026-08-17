import { useState } from 'react';
import GlobalActions from './components/GlobalActions/GlobalActions';
import CardGrid from './components/CardGrid/CardGrid';
import Card from './components/Card/Card';
import { randomImage } from './utils/randomImage';
import type { Character, StatName } from './types';
import styles from './App.module.css';

function makeCharacter(): Character {
  return {
    id: crypto.randomUUID(),
    image: randomImage(),
    health: 100,
    attack: 0,
    defense: 50,
  };
}

function App() {
  // Temporary local state for the layout pass — replaced by the
  // useCharacters hook in the next step.
  const [characters, setCharacters] = useState<Character[]>(() =>
    Array.from({ length: 6 }, makeCharacter),
  );

  function handleChangeStat(id: string, stat: StatName, delta: number) {
    setCharacters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [stat]: c[stat] + delta } : c)),
    );
  }

  function handleAddCharacter() {
    setCharacters((prev) => [...prev, makeCharacter()]);
  }

  function handleAttackAll() {
    setCharacters((prev) => prev.map((c) => ({ ...c, health: 0 })));
  }

  return (
    <div className={styles.container}>
      <GlobalActions
        onAddCharacter={handleAddCharacter}
        onAttackAll={handleAttackAll}
      />
      <CardGrid>
        {characters.map((character) => (
          <Card
            key={character.id}
            character={character}
            onChangeStat={(stat, delta) =>
              handleChangeStat(character.id, stat, delta)
            }
          />
        ))}
      </CardGrid>
    </div>
  );
}

export default App;

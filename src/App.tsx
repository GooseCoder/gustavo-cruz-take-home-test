import GlobalActions from './components/GlobalActions/GlobalActions';
import CardGrid from './components/CardGrid/CardGrid';
import Card from './components/Card/Card';
import { useCharacters } from './hooks/useCharacters';
import styles from './App.module.css';

function App() {
  const { characters, addCharacter, removeCharacter, changeStat, attackAll } =
    useCharacters();

  return (
    <div className={styles.container}>
      <h1 className={styles.srOnly}>Character Roster</h1>
      <GlobalActions onAddCharacter={addCharacter} onAttackAll={attackAll} />
      <CardGrid>
        {characters.map((character) => (
          <Card
            key={character.id}
            character={character}
            onChangeStat={(stat, delta) => changeStat(character.id, stat, delta)}
            onRemove={() => removeCharacter(character.id)}
          />
        ))}
      </CardGrid>
    </div>
  );
}

export default App;

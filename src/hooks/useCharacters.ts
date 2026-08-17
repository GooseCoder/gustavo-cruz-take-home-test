import { useCallback, useState } from 'react';
import type { Character, StatName } from '../types';
import { randomImage } from '../utils/randomImage';

const INITIAL_COUNT = 6;

function makeCharacter(): Character {
  return {
    id: crypto.randomUUID(),
    image: randomImage(),
    health: 100,
    attack: 0,
    defense: 50,
  };
}

function makeNewCharacter(): Character {
  return { ...makeCharacter(), health: 0, attack: 0, defense: 0 };
}

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>(() =>
    Array.from({ length: INITIAL_COUNT }, makeCharacter),
  );

  const addCharacter = useCallback(() => {
    setCharacters((prev) => [...prev, makeNewCharacter()]);
  }, []);

  const removeCharacter = useCallback((id: string) => {
    setCharacters((prev) => prev.filter((character) => character.id !== id));
  }, []);

  const changeStat = useCallback((id: string, stat: StatName, delta: number) => {
    setCharacters((prev) =>
      prev.map((character) =>
        character.id === id
          ? { ...character, [stat]: character[stat] + delta }
          : character,
      ),
    );
  }, []);

  const attackAll = useCallback(() => {
    setCharacters((prev) => prev.map((character) => ({ ...character, health: 0 })));
  }, []);

  return { characters, addCharacter, removeCharacter, changeStat, attackAll };
}

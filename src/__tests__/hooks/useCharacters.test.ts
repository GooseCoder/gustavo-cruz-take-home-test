import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useCharacters } from '../../hooks/useCharacters';

describe('useCharacters', () => {
  it('seeds an initial roster with Health 100 / Attack 0 / Defense 50', () => {
    const { result } = renderHook(() => useCharacters());

    expect(result.current.characters).toHaveLength(6);
    for (const character of result.current.characters) {
      expect(character.health).toBe(100);
      expect(character.attack).toBe(0);
      expect(character.defense).toBe(50);
    }
  });

  it('changeStat applies a delta and allows values below zero', () => {
    const { result } = renderHook(() => useCharacters());
    const id = result.current.characters[0].id;

    act(() => result.current.changeStat(id, 'attack', 1));
    act(() => result.current.changeStat(id, 'attack', 1));
    act(() => result.current.changeStat(id, 'attack', -1));
    expect(result.current.characters[0].attack).toBe(1);

    // spec: stats can go below zero, no clamping
    for (let i = 0; i < 51; i++) {
      act(() => result.current.changeStat(id, 'defense', -1));
    }
    expect(result.current.characters[0].defense).toBe(-1);
  });

  it('changeStat only affects the targeted character', () => {
    const { result } = renderHook(() => useCharacters());
    const [first, second] = result.current.characters;

    act(() => result.current.changeStat(first.id, 'health', -10));

    expect(result.current.characters[0].health).toBe(90);
    expect(result.current.characters[1].health).toBe(second.health);
  });

  it('addCharacter appends a character with every stat at zero', () => {
    const { result } = renderHook(() => useCharacters());

    act(() => result.current.addCharacter());

    expect(result.current.characters).toHaveLength(7);
    const added = result.current.characters[6];
    expect(added.health).toBe(0);
    expect(added.attack).toBe(0);
    expect(added.defense).toBe(0);
  });

  it('attackAll zeroes every character\'s health, including newly added ones', () => {
    const { result } = renderHook(() => useCharacters());
    act(() => result.current.addCharacter());

    act(() => result.current.attackAll());

    expect(result.current.characters).toHaveLength(7);
    for (const character of result.current.characters) {
      expect(character.health).toBe(0);
    }
  });

  it('removeCharacter removes only the targeted character', () => {
    const { result } = renderHook(() => useCharacters());
    const idToRemove = result.current.characters[2].id;
    const remainingIds = result.current.characters
      .filter((c) => c.id !== idToRemove)
      .map((c) => c.id);

    act(() => result.current.removeCharacter(idToRemove));

    expect(result.current.characters).toHaveLength(5);
    expect(result.current.characters.map((c) => c.id)).toEqual(remainingIds);
  });
});

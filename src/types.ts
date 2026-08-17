import type { CharacterImage } from './utils/images';

export type StatName = 'health' | 'attack' | 'defense';

export interface Character {
  id: string;
  image: CharacterImage;
  health: number;
  attack: number;
  defense: number;
}

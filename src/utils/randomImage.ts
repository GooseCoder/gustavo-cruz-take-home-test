import { images, type CharacterImage } from '../data/images';

export function randomImage(): CharacterImage {
  return images[Math.floor(Math.random() * images.length)];
}

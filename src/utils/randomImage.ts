import { images, type CharacterImage } from './images';

export function randomImage(): CharacterImage {
  return images[Math.floor(Math.random() * images.length)];
}

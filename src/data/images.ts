export interface CharacterImage {
  url: string;
  dimensions: { width: number; height: number };
}

export const images: CharacterImage[] = [
  {
    url: '/img/bat.jpg',
    dimensions: { width: 500, height: 200 },
  },
  {
    url: '/img/knight.jpg',
    dimensions: { width: 500, height: 300 },
  },
  {
    url: '/img/skeleton.jpg',
    dimensions: { width: 500, height: 250 },
  },
];

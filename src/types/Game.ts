import { Platform } from './Platform';

export interface Game {
  id: number;
  slug: string;
  name: string;
  description: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

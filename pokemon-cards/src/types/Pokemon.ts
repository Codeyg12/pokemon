export interface Pokemon {
  id: number;
  name: string;
  url: string;
  weight: number;
  height: number;
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  };
  moves: { move: { name: string } }[];
}
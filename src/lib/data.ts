export const Entities = ["SPACE", "POLYANET", "COMETH", "SOLOON"] as const;
export const SoloonColor = ["blue", "red", "purple", "white"] as const;
export const ComethDirection = ["up", "down", "right", "left"] as const;
export type EntityVariant =
  | (typeof SoloonColor)[number]
  | (typeof ComethDirection)[number];
export const EntityType = {
  polyanet: 0,
  soloon: 1,
  cometh: 2,
};

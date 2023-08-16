import { DeleteEntity, getErrorMessage, wait } from "./utils";

import { GetCurrentMap } from "../api/map";

export async function ClearMap() {
  console.log("Clearing map...");
  const [map] = await GetCurrentMap();

  try {
    for (let i = 0; i < map.length; i++) {
      const row = map[i];
      for (let j = 0; j < row.length; j++) {
        if (row[j] !== null) {
          await DeleteEntity(row[j].type, i, j);
          await wait(1000);
        }
      }
    }
  } catch (error: unknown) {
    const message = getErrorMessage(error);
    console.log(message);
  }
}

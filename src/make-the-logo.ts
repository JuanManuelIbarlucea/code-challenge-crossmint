import { CreateEntity, wait } from "./lib/utils";

import { GetGoalMap } from "./api/map";

// Iterates through the current goal map and calls the api 
// to create the corresponding entity on the same position
//
// Contemplated at first just running one for loop to maintin time complexity O(N)
// but realized it will always be just O(rox x column) taking into conisderation it´s a squared map (n x n)
async function MakeCrossmintLogo() {
  console.log("Making logo...");
  const [goalMap] = await GetGoalMap();

  for (let i = 0; i < goalMap.length; i++) {
    const row = goalMap[i];
    for (let j = 0; j < row.length; j++) {
      if(row[j] === "SPACE") continue;
      await CreateEntity(row[j], i, j);
      await wait(1000)
    }
  }
}

(async function () {
  await MakeCrossmintLogo();
})();

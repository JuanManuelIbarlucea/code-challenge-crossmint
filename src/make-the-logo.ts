import { CreateEntity, wait } from "./lib/utils";

import { GetGoalMap } from "./api/map";

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

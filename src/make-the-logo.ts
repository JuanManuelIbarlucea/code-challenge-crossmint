import { GetGoalMap } from './api/goal-map';
import { ClearMap, TraverseMap } from './lib/map';
import { CreateEntity } from './lib/utils';



async function MakeCrossmintLogo() {
  console.log('Making logo...');
  const [map] = await GetGoalMap();

  for(let i = 0; i < map.length; i++){
    const row = map[i];
    for(let j = 0; j < row.length; j++){
      await CreateEntity(row[j], i, j);
    }
  }
  }
}

(async function () {
  await ClearMap();

  // await MakeCrossmintLogo();
})();

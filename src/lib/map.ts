import { GetGoalMap } from '../api/goal-map';
import { DeletePolyanet } from '../api/polyanets';
import { getErrorMessage, wait } from './utils';

export async function ClearMap() {
  console.log('Clearing map...');
  const [map, flattenedMap] = await GetGoalMap();

  let row = 0;
  let column = 0;

  try {
    for (let i = 0; i < flattenedMap.length; i++) {
      if (flattenedMap[i] !== null) {
        await DeletePolyanet(row, column);
        await wait(1000);
      }
      if (column === map[0].length - 1) {
        row++;
        column = 0;
      } else {
        column++;
      }
    }
  } catch (error: unknown) {
    const message = getErrorMessage(error);
    console.log(message);
  }
}

export async function TraverseMap(
  columnsNumber: number,
  callback: (row: number, column: number, index: number) => Promise<unknown>
) {
  let row = 0;
  let column = 0;

  for (let i = 0; i < columnsNumber; i++) {
    await callback(row, column, i);
    if (column === columnsNumber - 1) {
      row++;
      column = 0;
    } else {
      column++;
    }
  }
}

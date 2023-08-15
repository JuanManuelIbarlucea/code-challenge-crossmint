// const fetch = require('node-fetch');
import { CreatePolyanet } from './api/polyanets';
import { ClearMap } from './lib/map';
import { getErrorMessage, wait } from './lib/utils';

async function MakeAPolyanetCross(padding = 0, colNumber = 11) {
  console.log('Creating cross...');

  try {
    for (let i = padding; i < colNumber - padding; i++) {
      await CreatePolyanet(i, i);
      await wait(1000);
      await CreatePolyanet(i, colNumber - i - 1);
      await wait(1000);
    }
  } catch (error: unknown) {
    console.log(getErrorMessage(error));
  }
}

(async function () {
  // This was used for development, to automate the process of clearing the whole map if there was a problem with the function
  // await ClearMap();
  await MakeAPolyanetCross(2);
})();

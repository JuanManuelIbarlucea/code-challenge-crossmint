// const fetch = require('node-fetch');

import { getErrorMessage, wait } from './lib/utils';

import { CreatePolyanet } from './api/polyanets';

// Creates polyanets through the Inversed and Exchange matrix
// Padding represents the amount of spaces around the cross.

// colNumber could easily be replaced by calling the CurrentGoalMap function
// and getting the size of it's first element.
async function MakeAPolyanetCross(padding:number = 0, colNumber: number = 11) {
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
  await MakeAPolyanetCross(2);
})();

// const fetch = require('node-fetch');

import { getErrorMessage, wait } from './lib/utils';

import { CreatePolyanet } from './api/polyanets';

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
  await MakeAPolyanetCross(2);
})();

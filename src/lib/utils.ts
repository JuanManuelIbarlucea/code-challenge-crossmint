import { CreateCometh } from '../api/comeths';
import { CreatePolyanet } from '../api/polyanets';
import { CreateSoloon } from '../api/soloons';
import { Entities, EntityVariant } from './data';

export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }

  return message;
};

export async function wait(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export async function CreateEntity(
  entity: (typeof Entities)[number] | string,
  row: number,
  column: number
) {
  if (entity === 'SPACE') return;
  else if (entity === 'POLYANET') {
    await CreatePolyanet(row, column);
  } else {
    const [variant, entityType] = entity.split('_');
    if (entityType === 'SOLOON') {
      await CreateSoloon(row, column, variant);
    } else if (entityType === Entities.cometh) {
      await CreateCometh(row, column, variant);
    }
  }
}

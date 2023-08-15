import { axiosInstance } from '.';
import { ComethDirection } from '../lib/data';
export async function CreateCometh(
  row: number,
  column: number,
  direction: string
) {
  if(ComethDirection.includes()){
    return;
  }
    await axiosInstance.post('/comeths', { row, column, direction });
  console.log(
    `${direction.toUpperCase()} Cometh created at position (${row},${column})`
  );
}

export async function DeleteCometh(row: number, column: number) {
  await axiosInstance.delete('/comeths', {
    data: { row, column },
  });
  console.log(`Cometh deleted at position (${row},${column})`);
}

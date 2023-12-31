import { SoloonColor } from '../lib/data';
import { axiosInstance } from '.';

export async function CreateSoloon(
  row: number,
  column: number,
  color: string
) {
  await axiosInstance.post('/soloons', { row, column, color });
  `${color.toUpperCase()} Soloon created at position (${row},${column})`;
}

export async function DeleteSoloon(row: number, column: number) {
  await axiosInstance.delete('/soloons', {
    data: { row, column },
  });
  `Soloon deleted at position (${row},${column})`;
}

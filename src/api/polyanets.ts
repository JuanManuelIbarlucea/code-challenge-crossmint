import { axiosInstance } from '.';

export async function CreatePolyanet(row: number, column: number) {
  await axiosInstance.post('/polyanets', { row, column });
  console.log(`Polyanet created at position (${row},${column})`);
}

export async function DeletePolyanet(row: number, column: number) {
  await axiosInstance.delete('/polyanets', {
    data: { row, column },
  });
  console.log(`Polyanet deleted at position (${row},${column})`);
}

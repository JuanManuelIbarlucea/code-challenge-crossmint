import { axiosInstance, candidateId } from '.';

export async function GetGoalMap(): Promise<[string[][], string[]]> {
  const {
    data: {
      map: { content: map },
    },
  } = await axiosInstance(`/map/${candidateId}`).catch((e: unknown) => {
    throw e;
  });
  return [map, map.flat];
}

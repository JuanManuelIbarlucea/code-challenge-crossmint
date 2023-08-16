import { axiosInstance, candidateId } from ".";

import { Entities } from '../lib/data';

type CurrentEntity ={
  type: number;
  color?: string;
  direction?:string;
}

export function GetGoalMap(): Promise<[(typeof Entities[number])[][], (typeof Entities[number])[]]> {
  return axiosInstance
    .get(`/map/${candidateId}/goal`)
    .then(({ data: { goal } }) => {
      return [goal, goal.flat()];
    });
}

export function GetCurrentMap(): Promise<[CurrentEntity[][], CurrentEntity[]]> {
  return axiosInstance
    .get(`/map/${candidateId}`)
    .then(({ data: { map: {content} } }) => {
      return [content, content.flat()];
    });
}

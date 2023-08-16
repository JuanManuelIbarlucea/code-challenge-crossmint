import { CreateCometh, DeleteCometh } from "../api/comeths";
import { CreatePolyanet, DeletePolyanet } from "../api/polyanets";
import { CreateSoloon, DeleteSoloon } from "../api/soloons";
import { Entities, EntityType } from "./data";

export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
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
  if (entity === "SPACE") return;
  else if (entity === "POLYANET") {
    await CreatePolyanet(row, column);
  } else {
    const [variant, entityType] = entity.split("_");
    if (entityType === "SOLOON") {
      await CreateSoloon(row, column, variant.toLowerCase());
    } else if (entityType === "COMETH") {
      await CreateCometh(row, column, variant.toLowerCase());
    }
  }
}

export async function DeleteEntity(
  entityNumber: number,
  row: number,
  column: number
) {
  switch (entityNumber) {
    case EntityType.polyanet:
      await DeletePolyanet(row, column);
      break;
    case EntityType.soloon:
      await DeleteSoloon(row, column);
      break;
    case EntityType.cometh:
      await DeleteCometh(row, column);
      break;
    default:
      return;
  }
}

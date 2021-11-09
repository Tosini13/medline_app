import axios from "axios";
import { Id, TLine } from "../../models/backend";
import { LINE_API_URL } from "../../models/endpoints";

export type TDeleteLineParams = { id: Id };

export const deleteLine = async ({ id }: TDeleteLineParams) => {
  return await axios.delete<TLine>(LINE_API_URL(id));
};

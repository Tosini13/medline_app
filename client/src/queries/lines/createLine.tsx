import axios from "axios";
import { TLine } from "../../models/backend";
import { LINES_API_URL } from "../../models/endpoints";

export type TCreateLineParams = Omit<
  TLine,
  "id" | "lastUpdate" | "contributions"
>;

export const createLine = async (data: TCreateLineParams) => {
  return await axios.post<TLine>(LINES_API_URL, {
    ...data,
    lastUpdate: new Date(),
  });
};

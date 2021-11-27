import axios from "axios";
import { TLine } from "../../models/backend";
import { LINE_API_URL } from "../../models/endpoints";

export type TEditLineParams = Omit<
    TLine, "lastUpdate" | "contributions"
>;

export const editLine = async ({ id, ...data }: TEditLineParams) => {
    return await axios.put<TLine>(LINE_API_URL(id), {
        ...data,
        lastUpdate: new Date(),
    });
};

import axios, { AxiosRequestConfig } from "axios";
import { TResource } from "../../models/backend";
import { FILE_API_URL } from "../../models/endpoints";

export type TDeleteFileParams = {
  path: string;
  onUploadProgress?: AxiosRequestConfig["onUploadProgress"];
};

export const deleteFile = async ({
  path,
  onUploadProgress,
}: TDeleteFileParams) => {
  return await axios.delete<TResource[] | undefined>(FILE_API_URL(path), {
    headers: {
      "content-type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

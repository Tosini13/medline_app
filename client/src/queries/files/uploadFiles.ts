import axios, { AxiosRequestConfig } from "axios";
import { TResource } from "../../models/backend";
import { FILES_API_URL } from "../../models/endpoints";

export type TUploadFilesParams = {
  files: any[];
  onUploadProgress?: AxiosRequestConfig["onUploadProgress"];
};

export const uploadFiles = async ({
  files,
  onUploadProgress,
}: TUploadFilesParams) => {
  let formData = new FormData();
  Object.values(files).forEach((file) => formData.append(`files`, file));
  return await axios.post<TResource[] | undefined>(FILES_API_URL, formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

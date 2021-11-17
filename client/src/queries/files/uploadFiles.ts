import axios from "axios";
import { FILES_API_URL } from "../../models/endpoints";

export type TUploadFilesParams = { files: any[] };

export const uploadFiles = async ({ files }: TUploadFilesParams) => {
  let formData = new FormData();
  Object.values(files).forEach((file) => formData.append(`files`, file));
  return await axios.post<string[] | undefined>(FILES_API_URL, formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

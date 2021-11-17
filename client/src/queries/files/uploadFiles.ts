import axios from "axios";
import { IMAGES_API_URL } from "../../models/endpoints";

export type TUploadFilesParams = { file: any };

export const uploadFiles = async ({ file }: TUploadFilesParams) => {
  let formData = new FormData();
  formData.append("file", file);
  return await axios.post<string>(IMAGES_API_URL, formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

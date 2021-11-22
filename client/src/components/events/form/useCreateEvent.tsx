import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

import useAsync from "../../../helpers/useAsync";
import { Id, TResource } from "../../../models/backend";
import {
  createEvent,
  TCreateEventParams,
} from "../../../queries/events/createEvent";
import {
  TUploadFilesParams,
  uploadFiles,
} from "../../../queries/files/uploadFiles";
import { TEventForm } from "./EventForm";

export type TUseCreateEventParams = {
  lineId: Id;
  callbackSuccess: () => void;
  callbackError: () => void;
};

export type TUseCreateEventReturn = {
  isProcessing: boolean;
  onSubmit: SubmitHandler<TEventForm>;
  uploadProgress: number | null;
};

export const useCreateEvent = ({
  lineId,
  callbackSuccess,
  callbackError,
}: TUseCreateEventParams): TUseCreateEventReturn => {
  const { isProcessing, execute } = useAsync();
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  console.log("uploadProgress", uploadProgress);

  const onUploadProgress: AxiosRequestConfig["onUploadProgress"] = (
    progressEvent
  ) => {
    var percentCompleted = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
    );
    console.log("percentCompleted", percentCompleted);
    setUploadProgress(
      Math.round((progressEvent.loaded * 100) / progressEvent.total)
    );
  };

  const onSubmit: SubmitHandler<TEventForm> = async (data) => {
    let res;
    if (data.files) {
      const fileDate: TUploadFilesParams = {
        files: data.files,
        onUploadProgress: onUploadProgress,
      };
      try {
        res = await execute<AxiosResponse<TResource[] | undefined, any>>(
          uploadFiles(fileDate)
        );
      } catch (e) {
        console.error("Something went wrong while uploading files!!", e);
        callbackError();
        setUploadProgress(null);
        return;
      }
    }
    const eventData: TCreateEventParams = {
      title: data.title,
      description: data.description,
      dateTime: data.dateTime,
      type: data.type,
      line: lineId,
      resources: res?.data,
    };
    try {
      await execute(createEvent(eventData));
      callbackSuccess();
    } catch (e) {
      console.error("Something went wrong while creating event!!", e);
      callbackError();
    }
    setUploadProgress(null);
  };

  return {
    onSubmit,
    isProcessing,
    uploadProgress,
  };
};

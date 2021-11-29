import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

import useAsync from "../../../helpers/useAsync";
import { Id, TResource, TEvent } from "../../../models/backend";
import { editEvent, TEditEventParams } from "../../../queries/events/editEvent";
import {
  TUploadFilesParams,
  uploadFiles,
} from "../../../queries/files/uploadFiles";
import { deleteFile } from "../../../queries/files/deleteFile";
import { TEventForm } from "./EventForm";

export type TuseEditEventParams = {
  event: TEvent;
  lineId: Id;
  callbackSuccess: () => void;
  callbackError: () => void;
};

export type TuseEditEventReturn = {
  isProcessing: boolean;
  onSubmit: SubmitHandler<TEventForm>;
  uploadProgress: number | null;
};

export const useEditEvent = ({
  event,
  lineId,
  callbackSuccess,
  callbackError,
}: TuseEditEventParams): TuseEditEventReturn => {
  const { isProcessing, execute } = useAsync();
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const onUploadProgress: AxiosRequestConfig["onUploadProgress"] = (
    progressEvent
  ) => {
    setUploadProgress(
      Math.round((progressEvent.loaded * 100) / progressEvent.total)
    );
  };

  const onSubmit: SubmitHandler<TEventForm> = async (data) => {
    let paths: TResource[] = [];
    const pathsToDelete = event.resources
      ?.filter((resource) =>
        data.resources?.every((r) => r.path !== resource.path)
      )
      .map((r) => r.path);

    if (pathsToDelete?.length) {
      try {
        await execute(
          Promise.all(pathsToDelete.map((path) => deleteFile({ path })))
        );
        paths =
          event.resources
            ?.filter((resource) =>
              data.resources?.some((r) => r.path === resource.path)
            )
            .map((r) => r) ?? [];
      } catch (e) {
        console.error("Something went wrong while deleting files!!", e);
        callbackError();
        setUploadProgress(null);
        return;
      }
    }

    if (data.files) {
      const fileDate: TUploadFilesParams = {
        files: data.files,
        onUploadProgress: onUploadProgress,
      };
      try {
        const responseFiles = await execute<
          AxiosResponse<TResource[] | undefined, any>
        >(uploadFiles(fileDate));
        paths = [
          ...(paths ? paths : []),
          ...(responseFiles?.data ? responseFiles.data : []),
        ];
      } catch (e) {
        console.error("Something went wrong while uploading files!!", e);
        callbackError();
        setUploadProgress(null);
        return;
      }
    }
    const eventData: TEditEventParams = {
      id: event.id,
      title: data.title,
      description: data.description,
      dateTime: data.dateTime,
      type: data.type,
      line: lineId,
      resources: paths,
    };
    try {
      await execute(editEvent(eventData));
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

import { useCallback, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { EGetEvents, EVerifyTokenMessage, Id, TEvent } from "../../models/backend";
import { EVENTS_LINE_API_URL } from "../../models/endpoints";

export type TGetEventsResponse = {
  message?: EGetEvents | EVerifyTokenMessage;
  data?: TEvent[];
}

export type TUseGetEventsReturn = {
  response?: AxiosResponse<TGetEventsResponse, any>;
  reExecute: () => Promise<void>;
};

export const useGetEvents = (lineId: Id): TUseGetEventsReturn => {
  const [response, setResponse] = useState<
    AxiosResponse<TGetEventsResponse> | undefined
  >();

  const fetch = useCallback(async () => {
    try {
      const res = await axios.get<TGetEventsResponse>(EVENTS_LINE_API_URL(lineId));
      console.log('res', res);
      setResponse(res);
    } catch (e) {
      console.log('e', e);
    }
  }, [lineId]);

  useEffect(() => {
    fetch();
  }, [lineId, fetch]);

  return { response, reExecute: fetch };
};

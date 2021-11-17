import { useCallback, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Id, TEvent } from "../../models/backend";
import { EVENTS_LINE_API_URL } from "../../models/endpoints";

export type TUseGetEventsReturn = {
  response?: AxiosResponse<TEvent[], any>;
  reExecute: () => Promise<void>;
};

export const useGetEvents = (lineId: Id): TUseGetEventsReturn => {
  const [response, setResponse] = useState<
    AxiosResponse<TEvent[]> | undefined
  >();

  const fetch = useCallback(async () => {
    const res = await axios.get<TEvent[]>(EVENTS_LINE_API_URL(lineId));
    setResponse(res);
  }, [lineId]);

  useEffect(() => {
    fetch();
  }, [lineId, fetch]);

  return { response, reExecute: fetch };
};

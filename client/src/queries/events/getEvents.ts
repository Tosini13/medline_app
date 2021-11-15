import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Id, TEvent } from "../../models/backend";
import { EVENTS_LINE_API_URL } from "../../models/endpoints";

export const useGetEvents = (lineId: Id) => {
  const [response, setResponse] = useState<
    AxiosResponse<TEvent[]> | undefined
  >();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get<TEvent[]>(EVENTS_LINE_API_URL(lineId));
      setResponse(res);
    };
    fetch();
  }, [lineId]);

  return response;
};

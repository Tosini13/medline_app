import { useCallback, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Id, TLine } from "../../models/backend";
import { LINE_API_URL } from "../../models/endpoints";
import { TUseAsyncResult } from "../../helpers/useAsync";

export type TUseGetLineParams = {
  id: Id;
  execute: TUseAsyncResult["execute"];
};

export type TUseGetLineReturn = {
  response?: AxiosResponse<TLine, any>;
  reExecute: () => Promise<void>;
};

export const useGetLine = ({
  id,
  execute,
}: TUseGetLineParams): TUseGetLineReturn => {
  const [response, setResponse] = useState<AxiosResponse<TLine> | undefined>();
  const fetch = useCallback(async () => {
    const res = await execute(axios.get<TLine>(LINE_API_URL(id)));
    setResponse(res);
  }, [id]);
  useEffect(() => {
    fetch();
  }, [id, fetch]);

  return { response, reExecute: fetch };
};

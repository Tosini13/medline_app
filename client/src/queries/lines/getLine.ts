import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Id, TLine } from "../../models/backend";
import { LINE_API_URL } from "../../models/endpoints";
import { TUseAsyncResult } from "../../helpers/useAsync";

export type TUseGetLineParams = {
  id: Id;
  execute: TUseAsyncResult["execute"];
};

export const useGetLine = ({ id, execute }: TUseGetLineParams) => {
  const [response, setResponse] = useState<AxiosResponse<TLine> | undefined>();
  useEffect(() => {
    const fetch = async () => {
      const res = await execute(axios.get<TLine>(LINE_API_URL(id)));
      setResponse(res);
    };
    fetch();
  }, [id]);

  return response;
};

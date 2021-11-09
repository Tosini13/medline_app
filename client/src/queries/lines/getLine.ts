import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Id, TLine } from "../../models/backend";
import { LINE_API_URL } from "../../models/endpoints";

export type TUseGetLineParams = {
  id: Id;
};

export const useGetLine = ({ id }: TUseGetLineParams) => {
  const [response, setResponse] = useState<AxiosResponse<TLine> | undefined>();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get<TLine>(LINE_API_URL(id));
      setResponse(res);
    };
    fetch();
  }, [id]);

  return response;
};

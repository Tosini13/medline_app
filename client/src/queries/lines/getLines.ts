import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { TLine } from "../../models/backend";
import { LINES_API_URL } from "../../models/endpoints";

export const useGetLines = () => {
  const [response, setResponse] = useState<
    AxiosResponse<TLine[]> | undefined
  >();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get<TLine[]>(LINES_API_URL);
      setResponse(res);
    };
    fetch();
  }, []);

  return response;
};

import { useState } from "react";

export type TUseAsyncResult = {
  isProcessing: boolean;
  execute: <TResult>(promise: Promise<TResult>) => Promise<TResult>;
};

const useAsync = (): TUseAsyncResult => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  return {
    isProcessing,
    execute: async <TResult>(promise: Promise<TResult>) => {
      setIsProcessing(true);
      const response = await promise;
      setIsProcessing(false);
      return response;
    },
  };
};

export default useAsync;

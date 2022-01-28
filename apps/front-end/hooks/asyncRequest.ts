import { useState } from 'react';

type ReturnType<R> = [
  {
    error?: string;
    isLoading?: boolean;
    responseData?: R;
  },
  () => Promise<void>
];

export const useAsyncState = <R, _>(
  asyncFunction: () => Promise<R>
): ReturnType<R> => {
  const [responseData, setResponseData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = async () => {
    setIsLoading(true);

    try {
      const response = await asyncFunction();
      setResponseData(response);
    } catch (e) {
      setError(e?.response?.data ? e.response.data : e.message);
      setResponseData(undefined);
    } finally {
      setIsLoading(false);
    }
  };
  return [
    {
      error,
      isLoading,
      responseData,
    },
    makeRequest,
  ];
};

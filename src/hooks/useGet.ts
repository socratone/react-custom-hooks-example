import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { User } from './types';

type useGetParams = {
  url: string;
};

const useGet = ({ url }: useGetParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<User[]>();
  const [error, setError] = useState<{} | null>(null);

  useEffect(() => {
    setIsLoading(true);

    try {
      axios
        .get<User[]>(url)
        .then((res) => {
          setIsLoading(false);
          setData(res.data);
        })
        .catch((error: AxiosError) => {
          setError(error.message);
        });
    } catch (err: any) {
      const error: Error = err;
      setError(error.message);
    }
  }, [url]);

  return {
    isLoading,
    data,
    error,
  };
};

export default useGet;

import axios from 'axios';
import {useState} from 'react';

interface PostResult<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  post: (url: string, apiData: any) => Promise<void>;
}

function usePost<T>(): PostResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const post = async (url: string, apiData: any): Promise<void> => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.post(url, apiData);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  };

  return {data, loading, error, post};
}

export default usePost;

import axios from 'axios';
import {useEffect, useState} from 'react';

interface FetchResult<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get<T[]>(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error};
}

export default useFetch;

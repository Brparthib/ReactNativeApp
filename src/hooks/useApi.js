import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://jsonplaceholder.typicode.com/users';

  // Memoize fetchData to avoid re-creation on each render
  const fetchData = useCallback(async (id = null) => {
    setLoading(true);
    const endpoint = id ? `${url}/${id}` : url;
    try {
      const { data } = await axios.get(endpoint);
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, fetchData };
};

export default useApi;

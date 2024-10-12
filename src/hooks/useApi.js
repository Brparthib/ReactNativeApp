import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://jsonplaceholder.typicode.com/users';

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useApi;

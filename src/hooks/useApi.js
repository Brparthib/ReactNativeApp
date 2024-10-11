import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://jsonplaceholder.typicode.com/users';

  const fetchData = async (id = null) => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData };
};

export default useApi;

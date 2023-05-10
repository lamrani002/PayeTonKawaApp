import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          setToken(value);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getToken();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get(url, options);
        setData(response.data);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    if (token) {
      fetchData();
    }
  }, [url, token]);

  const refetch = async () => {
    setLoading(true);
    setError(null);

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(url, options);
      setData(response.data);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;

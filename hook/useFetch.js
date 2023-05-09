import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint,token) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const options = {
  //   method: "GET",
  //   url: `https://ea6b-2001-861-81-3860-8ca9-7d47-a526-229b.ngrok-free.app/${endpoint}`,
  //   headers: { Authorization: `Bearer ${token}`}
  // };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`https://e62c-2001-861-81-3860-296c-4376-b285-79ab.ngrok-free.app/${endpoint}`,{
        headers: { Authorization: `Bearer ${token}`}

      });
     // console.log(response);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;

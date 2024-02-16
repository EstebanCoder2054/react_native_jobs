import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  console.log("🚀 ~ useFetch ~ query:", query);
  console.log("🚀 ~ useFetch ~ endpoint:", endpoint);

  // query is an object
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query
    },
    headers: {
      "X-RapidAPI-Key": "3c66d5e3e2msh60b6d7de417cc76p111ad2jsn1d14f4b3bfb3",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.request(options);
        setData(response?.data?.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        alert("There is an error trying to fetch the data");
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
        console.log('desde el effect')
      fetchData();
    }, []);

  const refetch = () => {
    // sometimes the effect is not fetching properly that's why this function is implemeted
    setIsLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetch;
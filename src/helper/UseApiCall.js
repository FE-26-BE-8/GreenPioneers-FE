import { useState, useEffect } from "react";
import axios from "axios";

const UseApiCall = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url, method, body = null, headers = {}) => {
    try {
      setIsLoading(true);
      const config = {
        method,
        url,
        data: body,
        headers,
      };
      const response = await axios(config);
      setData(response.data);
      setError(null);
      return response; // Return the data from the API call
    } catch (error) {
      console.log(error.response.status)
      setData(null);
      setError(error);
      throw error; // Rethrow the error to be caught in the component
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, fetchData };
};

export default UseApiCall;
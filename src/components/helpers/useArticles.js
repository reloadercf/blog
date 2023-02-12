/* eslint-disable arrow-parens */
import { useState, useEffect } from 'react';
import axios from 'axios';

const useArticles = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    setLoading(true);
    axios.get(url).then((response) => {
      const dataShot = response.data.slice(0, 2);
      setArticles(dataShot);
    })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { articles, loading, error };
};

export default useArticles;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [post, setPost] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError('');
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError('Something went wrong!');
      });
  }, []);

  return (
    <div>
      {loading ? 'loading' : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;

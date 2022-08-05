import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../index.css';

const TodoDetail = (props) => {
  const params = useParams();
  const [item, setItem] = useState({});

  const [url, setUrl] = useState(`/tasks/${params.id}`);
  console.log(setUrl);

  useEffect(() => {
    fetch(url, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setItem(data.task[0]);
      });
  }, [url]);

  return (
    <div>
      <h3>Todo Detail</h3>

      {item ? (
        <div>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TodoDetail;

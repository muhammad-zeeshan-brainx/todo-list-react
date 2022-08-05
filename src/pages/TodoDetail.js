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
    <section className="jumbotron text-center">
      <div className="container">
        {item ? (
          <div>
            <h1 className="jumbotron-heading">{item.name}</h1>

            <p className="lead text-muted mb-0">{item.description}</p>
          </div>
        ) : (
          <p className="lead text-muted mb-0">Loading...</p>
        )}
      </div>
    </section>
  );
};

export default TodoDetail;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Classes() {
  const { id } = useParams();

  const [classe, setClasse] = useState([]);

  useEffect(() => {
    axios.get(`http://www.lojanauber.com.br/app/classe/${linha.id}`).then((response) => {
      setClasse(response.data);
    });
  }, [id]);

  return (
    <div>
      <h1>Classes</h1>

      {classe && (
        <div key={classe.id}>
          <p>{classe.name}</p>

          <img
            className="icon11"
            src={`data:image/png;base64, ${classe.photo}`}
            alt={classe.name}
          />
        </div>
      )}
    </div>
  );
}

export default Classes;

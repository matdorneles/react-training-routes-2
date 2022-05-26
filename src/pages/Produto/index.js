import { useParams } from 'react-router-dom';

function Produto() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalhe do produto:</h2>
      <span>Mostrando produto {id}</span>
    </div>
  );
}

export default Produto
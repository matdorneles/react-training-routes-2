import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="App">
        <h1>Bem vindo à página Home</h1>
        <span>Mais uma linha</span> 
        <br /> <br />

        <Link to="/sobre">Sobre</Link> <br />
        <Link to="/contato">Contato</Link>
      </div>
    );
  }
  
  export default Home;
  
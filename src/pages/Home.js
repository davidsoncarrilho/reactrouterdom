import "./Home.css";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  // 3 - Carregamento de dados
  const url = "http://localhost:3000/products";

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              {/* 4- rota dinâmica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;

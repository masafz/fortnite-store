import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getFortniteFetch } from "./fortniteState";
import { useEffect } from "react";

function App() {
  const fortnite = useSelector((state) => state.fortnite.fortnite);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFortniteFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>FORTNITE STORE</h1>
      <p>Fortnite store items to purchase...</p>
      <hr />
      <div className="store">
        {fortnite.data.map((item) => (
          <div key={item.id} className="row">
            <div className="column column-left">
              <img
                src={item.item.images.icon}
                alt={item.item.name}
                width={200}
                height={200}
              />
            </div>
            <div className="column column-right">
              <h2>{item.item.name}</h2>
              <p>{item.item.description}</p>
              <p>Rarity: {item.item.rarity}</p>
              <button>add to cart...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

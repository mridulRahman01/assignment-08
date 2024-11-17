import { useLoaderData, useParams } from "react-router-dom";
import CardCat from "./CardCat";
import { useEffect, useState } from "react";

const Cards = () => {
  const data = useLoaderData();

  const { card } = useParams();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (card) {
      {
        const filteredByCategory = [...data].filter(
          (cat) => cat.category === card
        );
        setCards(filteredByCategory);
      }
    } else {
      setCards(data.slice(0, 9));
    }
  }, [card, data]);
  console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((cat) => (
        <CardCat key={cat.id} cat={cat}></CardCat>
      ))}
    </div>
  );
};

export default Cards;

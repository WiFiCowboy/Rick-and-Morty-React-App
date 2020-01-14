import React, { useState, useEffect } from "react";
// useState is the state (holds the info from the API), useEffect runs the API call when the component mounts
import { Link } from "react-router-dom";
import '../App.css';

function Charecters() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character");

    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  };

  return (
    <div>
      {items.map(item => (
        <h1 key={item.id}>
          <Link to={`/Charecters/${item.id}`} >{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Charecters;

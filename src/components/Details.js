import React, { useState, useEffect } from "react";
// useState is the state (holds the info from the API), useEffect runs the API call when the component mounts

import "../App.css";

function Details({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
    
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://rickandmortyapi.com/api/character/${match.params.id}`
    );
    const item = await fetchItem.json();
      setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.image}/>
      <h2>Status: {item.status}</h2>
      <h2>Species: {item.species}</h2>
    </div>
  );
}

export default Details;

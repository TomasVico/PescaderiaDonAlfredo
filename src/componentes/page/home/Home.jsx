import React from "react";
import ItemListContainer from "../../common/item/ItemListContainer";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <h1 id="titulo">Bienvenidos a Pescadería Don Alfredo</h1>
      <div id="containers">
        <ItemListContainer producto={"Boga despinada"} precio={3900} />
        <ItemListContainer producto={"Dorado"} precio={5000} />
      </div>
      <div id="containers">
        <ItemListContainer producto={"Milanesas de surubi"} precio={3900} />
        <ItemListContainer
          producto={"Empanadas "}
          precio={5000 + " (la docena)"}
        />
      </div>
      <div id="containers">
        <ItemListContainer producto={"Milanesas de sabalo"} precio={3900} />
        <ItemListContainer producto={"Rabas"} precio={8000} />
      </div>
    </div>
  );
};

export default Home;

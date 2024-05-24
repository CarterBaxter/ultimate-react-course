import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const app = (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
  return app;
}

function Header() {
  const header = (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
  return header;
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  const menu = (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          ;
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} /> //needs unique key for optimizations
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. PLease come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> */}
    </main>
  );
  return menu;
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  const pizza = (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
  return pizza;
}

// function Pizza(props) {
//   if (props.pizzaObj.soldOut) return null;

//   const pizza = (
//     <li className="pizza">
//       <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
//       <div>
//         <h3>{props.pizzaObj.name}</h3>
//         <p>{props.pizzaObj.ingredients}</p>
//         <span>{props.pizzaObj.price}</span>
//       </div>
//     </li>
//   );
//   return pizza;
// }

function Footer() {
  //example without JSX
  //   return React.createElement("footer", null, "We're currently Open");
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;

  const foot = (
    <footer className="footer">
      {isOpen ? (
        <Order closehour={closehour} />
      ) : (
        <p>
          We are happy to welcome you between {openhour}:00 and {closehour}:00.
        </p>
      )}
    </footer>
  );
  return foot;
}

function Order({ closehour }) {
  return (
    <div className="order">
      <p>We're open untill {closehour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

//React Version 18 (and beyond?)
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
//can endable strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

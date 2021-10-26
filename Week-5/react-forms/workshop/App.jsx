import React from 'react';
// import dishes from '../data';

// // Part 2: Render a list

// function App() {
//   return (
//     <main>
//       <section className="filters">
//         <h1>Burger Place</h1>
//         <form>Inputs go here</form>
//       </section>
//       <section className="dishes">
//         <h2>Dishes</h2>
//         <ul className="grid">
//           {dishes.map((dish) => (
//             <li className="card" key={dish.id}>
//               <h3>{dish.name}</h3>
//               <p>{dish.description}</p>
//               <div>£{dish.price.toFixed(2)}</div>
//             </li>
//           ))}
//         </ul>
//         );
//       </section>
//     </main>
//   );
// }

// // Part 3: Create price inputs

// function App() {
//   const [min, setMin] = React.useState(0.5);
//   const [max, setMax] = React.useState(9);
//   return (
//     <main>
//       <section className="filters">
//         <h1>Burger Place</h1>
//         <form>
//           <fieldset>
//             <legend>Price</legend>
//             <label htmlFor="min-price">
//               Min price
//               <input
//                 type="range"
//                 id="min-price"
//                 min="0.5"
//                 max="9"
//                 step="0.25"
//                 value={min}
//                 onChange={(event) => setMin(event.target.value)}
//               />
//             </label>
//             <label htmlFor="max-price">
//               Max price
//               <input
//                 type="range"
//                 id="min-price"
//                 min="0.5"
//                 max="9"
//                 step="0.25"
//                 value={max}
//                 onChange={(event) => setMax(event.target.value)}
//               />
//             </label>
//           </fieldset>
//         </form>
//       </section>
//       <section className="dishes">
//         <h2>Dishes</h2>
//         <ul className="grid">
//           {dishes.length ? (
//             dishes.map((dish) => (
//               <li key={dish.id} className="card">
//                 <h3>{dish.name}</h3>
//                 {dish.description && <p>{dish.description}</p>}
//                 <div>£{dish.price.toFixed(2)}</div>
//               </li>
//             ))
//           ) : (
//             <li className="card">No results found</li>
//           )}
//         </ul>
//         );
//       </section>
//     </main>
//   );
// }

// // Part 4: Filter list by price

// function App() {
//   const [min, setMin] = React.useState(0.5);
//   const [max, setMax] = React.useState(9);
//   return (
//     <main>
//       <section className="filters">
//         <h1>Burger Place</h1>
//         <form>
//           <fieldset>
//             <legend>Price</legend>
//             <label htmlFor="min-price">
//               Min price
//               <input
//                 type="range"
//                 id="min-price"
//                 min="0.5"
//                 max="9"
//                 step="0.25"
//                 value={min}
//                 onChange={(event) => setMin(event.target.value)}
//               />
//             </label>
//             <label htmlFor="max-price">
//               Max price
//               <input
//                 type="range"
//                 id="min-price"
//                 min="0.5"
//                 max="9"
//                 step="0.25"
//                 value={max}
//                 onChange={(event) => setMax(event.target.value)}
//               />
//             </label>
//           </fieldset>
//         </form>
//       </section>
//       <section className="dishes">
//         <h2>Dishes</h2>
//         <ul className="grid">
//           {dishes.length ? (
//             dishes
//               .filter((dish) => dish.price >= min && dish.price <= max)
//               .map((dish) => (
//                 <li key={dish.id} className="card">
//                   <h3>{dish.name}</h3>
//                   {dish.description && <p>{dish.description}</p>}
//                   <div>£{dish.price.toFixed(2)}</div>
//                 </li>
//               ))
//           ) : (
//             <li className="card">No results found</li>
//           )}
//         </ul>
//         );
//       </section>
//     </main>
//   );
// }

// // Part 5: Modularise your components

// import PriceFilter from './PriceFilter';
// import DishList from './DishList';

// function App() {
//   const [min, setMin] = React.useState(0.5);
//   const [max, setMax] = React.useState(9);
//   return (
//     <main>
//       <section className="filters">
//         <h1>Burger Place</h1>
//         <form>
//           <PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
//         </form>
//       </section>
//       <section className="dishes">
//         <h2>Dishes</h2>
//         <DishList min={min} max={max} />
//       </section>
//     </main>
//   );
// }

// // Part 6: Create radio group

// import PriceFilter from './PriceFilter';
// import DishList from './DishList';
// import CategoryFilter from './CategoryFilter';

// function App() {
//   const [min, setMin] = React.useState(0.5);
//   const [max, setMax] = React.useState(9);
//   const [category, setCategory] = React.useState('all');
//   return (
//     <main>
//       <section className="filters">
//         <h1>Burger Place</h1>
//         <form>
//           <PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
//           <CategoryFilter category={category} setCategory={setCategory} />
//         </form>
//       </section>
//       <section className="dishes">
//         <h2>Dishes</h2>
//         <DishList min={min} max={max} />
//       </section>
//     </main>
//   );
// }

// Part 7: Filter list by category

import PriceFilter from './PriceFilter';
import DishList from './DishList';
import CategoryFilter from './CategoryFilter';

function App() {
  const [min, setMin] = React.useState(0.5);
  const [max, setMax] = React.useState(9);
  const [category, setCategory] = React.useState('all');
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>
          <PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
          <CategoryFilter category={category} setCategory={setCategory} />
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <DishList min={min} max={max} category={category} />
      </section>
    </main>
  );
}

export default App;

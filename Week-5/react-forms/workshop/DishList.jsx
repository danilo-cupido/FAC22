import React from 'react';
import dishes from '../data';

// function DishList({ min, max }) {
//   return (
//     <ul className="grid">
//       {dishes
//         .filter((dish) => dish.price >= min && dish.price <= max)
//         .map((dish) => (
//           <li key={dish.id} className="card">
//             <h3>{dish.name}</h3>
//             {dish.description && <p>{dish.description}</p>}
//             <div>£{dish.price.toFixed(2)}</div>
//           </li>
//         ))}
//     </ul>
//   );
// }

// Part 7: Filter list by category

function DishList({ min, max, category }) {
  return (
    <ul className="grid">
      {dishes
        .filter((dish) => category === 'all' || dish.category === category)
        .filter((dish) => dish.price >= min && dish.price <= max)
        .map((dish) => (
          <li key={dish.id} className="card">
            <h3>{dish.name}</h3>
            {dish.description && <p>{dish.description}</p>}
            <div>£{dish.price.toFixed(2)}</div>
          </li>
        ))}
    </ul>
  );
}

export default DishList;

import React from 'react';
import Profile from './Profile.jsx';

// // Challenge 1: user profile

// function App() {
//   return (
//     <main>
//       <div>
//         <Profile />
//       </div>
//     </main>
//   );
// }

// // Challenge 2: re-usable profile

// function App() {
//   return (
//     <main>
//       <div>
//         <Profile name="danilo-cupido" />
//       </div>
//     </main>
//   );
// }

// Challenge 3: searching for users

function App() {
  const [name, setName] = React.useState('danilo-cupido');
  return (
    <main>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setName(event.target.username.value);
        }}
      >
        <input
          type="search"
          aria-label="Search users"
          placeholder="Search users"
          name="username"
        />
      </form>

      <Profile name={name} />
    </main>
  );
}

export default App;

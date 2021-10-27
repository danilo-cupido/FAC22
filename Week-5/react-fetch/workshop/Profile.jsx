import React from 'react';

// // Challenge 1: user profile

// function Profile() {
//   const [gitData, setGitData] = React.useState();

//   React.useEffect(() => {
//     fetch('https://api.github.com/users/danilo-cupido')
//       .then((res) => res.json())
//       .then((data) => setGitData(data));
//   }, []);

//   if (!gitData) {
//     return <div>Be patient, it will eventually appear!</div>;
//   } else {
//     return (
//       <div>
//         <h1>{gitData.name}</h1>
//         <img
//           src={gitData.avatar_url}
//           alt="This is Danilo"
//           width="128"
//           height="128"
//         />
//       </div>
//     );
//   }
// }

// Challenge 2: re-usable profile

const USER_URL = 'https://api.github.com/users/';

function Profile(props) {
  const [gitData, setGitData] = React.useState(null);

  React.useEffect(() => {
    fetch(USER_URL + props.name)
      .then((res) => res.json())
      .then((data) => setGitData(data));
  }, [props.name]);

  if (!gitData) {
    return <div>Be patient, it will eventually appear!</div>;
  } else {
    return (
      <div>
        <h1>{gitData.name}</h1>
        <img
          src={gitData.avatar_url}
          alt="This is Danilo"
          width="128"
          height="128"
        />
      </div>
    );
  }
}

export default Profile;

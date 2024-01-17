// imports
// globals
const userlist = [
  "Ana",
  "Sara",
  "Luis",
  "Mario",
  "Carmen",
  "Laura",
  "Sergio",
  "Diego",
  "Elena",
  "Carlos",
  "Victoria",
  "Javier",
  "María",
  "Pedro",
  "Lucía",
  "Marta",
  "Juan",
  "Isabela",
  "Raúl",
  "Andrea",
  "Roberto",
  "Paula",
  "Fernando",
  "Marina",
  "Hugo",
];

import UserList from "./UserList";

const Container = () => {
  // hooks
  // vars
  // functs

  return (
    <div style={{ width: 'fit-content', margin: 'auto'}}>
      <UserList users={ userlist }/>
    </div>
  );
};

export default Container;

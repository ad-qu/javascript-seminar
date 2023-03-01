const url = 'https://jsonplaceholder.typicode.com';

const btnUsers = document.getElementById("btnUsers");
const btnFilter = document.getElementById("btnFilter");
const btnSort = document.getElementById("btnSort");

btnUsers.onclick = () => getUsers();
btnFilter.onclick = () => getUsersFilterID();
btnSort.onclick = () => getUsernamesAlphabetically();

//Display all users
const getUsers = () => {
  fetch(`${url}/users`)
  .then(response => response.json())
  .then(json => json.forEach(user => {
    console.log(user.name);
  }))
}

//Filter users when their id is greater than 3
  const getUsersFilterID = () => {
    fetch(`${url}/users`)
      .then(response => response.json())
      .then(json => console.log(json.filter(user => user.id > 3)))
  }

//Sort usernames alphabetically
  const getUsersAlphabetically = () => {
    fetch(`${url}/users`)
      .then(response => response.json())
      .then(json => console.log(json.sort((u1, u2) => u1.username > u2.username ? 1 : -1)))
  }
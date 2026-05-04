function getUniqueUsers(users) {
    let map = new Map();
    let arr = [];
    users.forEach(elem => {map.set(elem.id, elem)});
    map.forEach(elem => arr.push(elem));
    return arr;
}

// Input
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Anna' },
  { id: 1, name: 'John' } // duplicate
];

//Expected Output
console.log(getUniqueUsers(users)); // [ { id: 1, name: 'John' }, { id: 2, name: 'Anna' } ]

function groupByGroup(students) {
    let len = students.length;
    let map = new Map();
    for(let i of students) {
        if(!map.has(i.group)) {
            map.set(i.group, []);
        }

        map.get(i.group).push(i.name);
    }
    return map;
}


// Input
const students = [
  { name: 'John', group: 'A' },
  { name: 'Anna', group: 'B' },
  { name: 'Max', group: 'A' }
];

// Expected Output
console.log(groupByGroup(students));
// Map(2) {
//   'A' => ['John', 'Max'],
//   'B' => ['Anna']
// }
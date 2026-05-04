function intersection(set1, set2) {
    let common = new Set();
    for(let i of set1) {
        if (set2.has(i)) {
            common.add(i)
        }
    }
    return common;
}

function difference(set1, set2) {
    let different = new Set();
    for(let i of set1) {
        if (!set2.has(i)) {
            different.add(i)
        }
    }
    return different;
}

// Input
const setA = new Set(['reading', 'games', 'music']);
const setB = new Set(['games', 'sports']);

// Expected Output
console.log(intersection(setA, setB)); 
// Set(1) { 'games' }

console.log(difference(setA, setB)); 
// Set(2) { 'reading', 'music' }
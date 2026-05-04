let wmap = new WeakMap();

function addLike(post, user) {
    if(!wmap.has(post)) { wmap.set(post,[]); }
    wmap.get(post).push(user)
    return wmap;
}

function getLikes(post) {
    return wmap.get(post)
}


// Input
let post1 = { title: 'JS is awesome' };
let post2 = { title: 'Node.js event loop' };

addLike(post1, 'John');
addLike(post1, 'Anna');

// Expected Output
console.log(getLikes(post1)); // ['John', 'Anna']
console.log(getLikes(post2)); // [] or undefined
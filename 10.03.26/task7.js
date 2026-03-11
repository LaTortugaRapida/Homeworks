var book1 = {
    title: "Master and Margarita",
    author: "Mikhail Bulgakov",
    details: {
        pages: 384
    }
};

var book2 = {
    title: "Master and Margarita",
    author: "Mikhail Bulgakov",
    details: {
        pages: 384
    }
};

var book3 = {
    title: "Master and Margarita",
    author: "Mikhail Bulgakov",
    details: {
        pages: 200 
    }
};


function isEqual(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for(var key in obj1) {
        if(!(key in obj2)) {
            return false;
        }
        if(typeof obj1[key] === "object" && typeof obj2[key] === "object") {
           if(!isEqual(obj1[key], obj2[key])) {
            return false;
           }
        } else if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true;
}

console.log(isEqual(book1, book2));
console.log(isEqual(book1, book3));
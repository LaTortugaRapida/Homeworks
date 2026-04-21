//Symbol.iterator's implementation helps us
//to define how the object is iterated.

let myRange = {
    from : 20,
    to : 10,

    [Symbol.iterator]() {   
        let current = this.from;
        let to = this.to;
        let move = 1;
        if(current > to) {
            move = -1;
        }

        return  {
            next() {
                if(move === 1 && current > to) {
                    return {value: undefined, done: true };
                }
                if(move === -1 && current < to) { 
                    return {value: undefined, done: true };
                }
                
                let val = current;
                current += move;
                return { value: val, done: false };
            }
        };
    }
}

console.log([...myRange]);


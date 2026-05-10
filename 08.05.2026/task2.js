function countedown(count) {
    console.log(count);
    if(count > 0) {
        setTimeout(() => countedown(count - 1), 1000);
    } else {
        console.log("Go!");
    }
}


countedown(5);
function printNum(num){
    console.log(num);
    setTimeout(() => {printNum(num + 1)}, 1000)
}

printNum(1);
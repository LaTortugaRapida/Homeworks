const wait = (time) => new Promise(resolve => setTimeout(resolve, time));

function runTrafficLight() {
    console.log("Red");
    
    wait(3000)
        .then(() => {
            console.log("Yellow");
            return wait(1000); 
        })
        .then(() => {
            console.log("Green");
            return wait(2000);
        })
        .then(() => {
            runTrafficLight(); // Restart the cycle
        })
        .catch(err => console.error("Something went wrong:", err));
}

runTrafficLight();
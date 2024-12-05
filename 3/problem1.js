function step1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order placed successfully");
            resolve();
        }, 2000);
    });
}

function step2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment processed successfully");  
            resolve();
        }, 4000);
    });
}

function step3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order being prepared");
            resolve();
        }, 3000);
    });
}

function finalStep(){
    console.log("Order delivered successfully");
}

step1()
    .then(() => {
        return step2();
    })
    .then(() => {
        return step3();
    })
    .then(() => {
        return finalStep();
    })
    .catch((err) => {
        console.log(err);
    });

console.log("Other services are running in the background");
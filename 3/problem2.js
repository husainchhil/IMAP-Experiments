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

async function main() {
    try {
        await step1();
        await step2();
        await step3();
        finalStep();
    } catch (err) {
        console.log(err);
    }
}

main();
console.log("Other services are running in the background");
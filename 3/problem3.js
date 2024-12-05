const delay = (message, time) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(message);
      resolve();
    }, time)
  );

async function processOrder() {
  try {
    await delay("Step 1: Order placed successfully", 2000);
    await delay("Step 2: Payment processed", 4000);
    await delay("Step 3: Order being prepared", 3000);
    console.log("Step 4: Order delivered! Enjoy your meal!");
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

processOrder();
console.log("Other services are running in the background... bye!");

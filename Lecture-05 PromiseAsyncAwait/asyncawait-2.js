function promiseTimeout(ms) {
    console.log('Do somethings');
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
async function longRunningoperations() {
    console.log('Start Long Running Operations')
    return 42;
}

async function run() {
    // logic
    console.log("Start!!");
    // Try take of await and compare
    await promiseTimeout(2000);

    const response = await longRunningoperations();
    console.log(response);
    console.log("STOP!!");
}

console.log('Before run');
run();
console.log('After run');
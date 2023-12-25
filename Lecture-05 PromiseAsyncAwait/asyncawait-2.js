function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
async function longRunningoperations() {
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
run();
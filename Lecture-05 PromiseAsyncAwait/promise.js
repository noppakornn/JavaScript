function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log("Start!!");
        return promiseTimeout(1000);
    })
    .then(() => {
        console.log("done!!");
        return Promise.resolve(42);
    })
    .then(() => {
        console.log("Also done");
    })
    .then(() => {
        console.log(result);
    })
    .catch(() => {
        console.log("Error!");
    });
    console.log("End")
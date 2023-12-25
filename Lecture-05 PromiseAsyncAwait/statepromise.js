const promise = new Promise((resolve, reject) => {
    const res = 0;
    //const res = true;
    // An asynchronous operation.
    if (res == 0) {
        resolve("Resolved!");
    } else {
        reject(Error("Fatal Error"));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);
const promise = new Promise((resolve, reject) => {
    let check = true;
    if (check) {
        resolve("BBB");
    } else reject("AAA");
});

const print = async () => {
    const result = await promise;
    console.log(result);
};

print();

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((result) => {
//         console.log(result);
//     });

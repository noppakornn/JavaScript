let furniture = ['Table', 'Chairs','Couch'];

for (let char of furniture) {
    for (let index = 0; index < char.length; index++) {
        const object = char[index];
        console.log(object);
    }
    console.log("");
}

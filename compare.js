let values1= ['Apple', 1, false];
let values2= ['Fries', 2, true];
let values3= ['Mars', 9, 'Apple'];

let arrayOfArrays = [values1, values2, values3];

for (let a = 0; a < arrayOfArrays.length; a++) {
    const currentItem = arrayOfArrays[a];
    
    for (let b = 0; b < currentItem.length; b++) {
        if (typeof currentItem[b] === 'string') {
            for (let c = 0; c < currentItem.length; c++) {
                const currentLetter = currentItem[b][c];
                console.log(currentLetter);
            }
        } 
    }
    console.log("");
}
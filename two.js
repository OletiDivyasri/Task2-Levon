function removeDuplicates(arr) {
    const uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        // Check if the current element is already in uniqueArray
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break; // Exit the inner loop if a duplicate is found
            }
        }

        // If it's not a duplicate, add it to uniqueArray
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

const array = [1, 1, 2, 2, 3, 4, 4, 5];

let dupEle = document.getElementById("duplicateArr")
for (let i = 0; i < array.length; i++) {
    dupEle.innerHTML += array[i] + "  "
}
const result = removeDuplicates(array);
let uniqueEle = document.getElementById("uniqueArr")
for (let i = 0; i < result.length; i++) {
    uniqueEle.innerHTML += result[i] + "  "
}
console.log(result);
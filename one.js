function reverseArray(arr) {
    return arr.reverse(); // Reverses the array in-place
}

// Example usage:
let arr = [1, 2, 3, 4, 5];

let orgEle = document.getElementById("orgArr")
for (let i = 0; i < arr.length; i++) {
    orgEle.innerHTML += arr[i] + " , "
}

reverseArray(arr);

let revEle = document.getElementById("revArr")
for (let i = 0; i < arr.length; i++) {
    revEle.innerHTML += arr[i] + " , "
}
// Output: [5, 4, 3, 2, 1]

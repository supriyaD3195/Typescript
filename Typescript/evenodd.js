var i;
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even = [];
var odd = [];
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even.push(arr[i]);
    }
    else {
        odd.push(arr[i]);
    }
}
console.log("Even numbers are:  " + even);
console.log("odd numbers are:  " + odd);

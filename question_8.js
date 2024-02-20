// Create a function that partitions an array into two arrays - one with even numbers and another with odd numbers

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenArray = [];
const oddArray = [];

function partitionArray(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 == 0) {
            evenArray.push(data[i]);
        }
        else {
            oddArray.push(data[i]);
        }
    }
    return [evenArray, oddArray];
}

console.log(partitionArray(numArray));
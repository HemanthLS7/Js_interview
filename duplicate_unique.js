//function to find the dupicate in an array

const arr = [1, 2, 4, 3, 5, 3, 5, 5, 6];

function duplicate(arr) {
  return (duplicateValues = arr.filter((ele, i, arr) => {
    return arr.indexOf(ele) !== i;
  }));
}
const Answer = duplicate(arr);
console.log(Answer);

// Function to find the unique elements of the array

function unique(arr) {
  return (uniqueValues = arr.filter((ele, i, arr) => {
    return arr.indexOf(ele) === i;
  }));
}
const UniqueAns = unique(arr);
console.log(UniqueAns);

//Method 2

let uniqueArr2 = new Set(...arr);
console.log(uniqueArr2);

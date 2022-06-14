/*
Create a function that takes a number as an argument. 
Add up all the numbers from 1 to the number you passed to the function. 
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

function addUp(num) {
  return (num * (num + 1)) / 2;
}

/* ------------------------------------------------------------------------------------ */

/*
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

function minMax(arr) {
  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  let result = [minimum, maximum];
  return result;
}

// or

function minMax(arr) {
  let maximum = arr[0];
  let minimum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maximum < arr[i]) {
      maximum = arr[i];
    } else {
      minimum = arr[i];
    }
  }
  let result = [minimum, maximum];
  return result;
}

/* ------------------------------------------------------------------------------------ */
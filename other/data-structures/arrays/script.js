// go through the entire array values one by one
// check if the current value is the lowest value so far, if it is store it
// after looking at all the values, the stored value would be the lowest of all values in the array

let elements = [2, 3, 4, 5, 35, 3237];

let lowestValue = elements[0];
for (let i = 0; i < elements.length; i++) {
  if (elements[i] < lowestValue) {
    lowestValue = elements[i];
  }
}

console.log(lowestValue);

// bubble sort Logic,

// The algorithm sorts the array from the highest to the lowest value
// The word 'Bubble' comes from how this algorithm works, it makes the highest values 'bubble up'.

// here's how bubble sort works
// Go through the array one value at a tme
// for each value, compare the value to the next
// if the value is higher than the next one, swap the values so that the highest values would come last
// Go through the array as many times as there are values

// bubble sort implementation in a programming
// 1. an array with values to sort
// 2. an inner loop that goes through the array and swaps  values if the first value is higher than the next value. this loop must loop through one less value each time it runs
// 3. an outer loop that controls how many times the inner loop must run, for an array with n values, this outer loop must run n-1 times

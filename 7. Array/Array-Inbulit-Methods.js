let arr = [10, 20, 30, 40];

// 1. push(): push() method is used to insert new values at the end of the array, we can insert single value as well as multiple values

arr.push(50);
console.log(arr); // [ 10, 20, 30, 40, 50 ]

arr.push(60, 70, 80);
console.log(arr); // [ 10, 20, 30, 40, 50, 60, 70, 80 ]

// 2. pop(): pop() method is used to remove values one by one from the end of the array

arr.pop();
console.log(arr); // [ 10, 20, 30, 40, 50, 60, 70 ]

// 3. unshift(): unshift() method is used to insert new values at the begining of the array, we can insert single value as well as multiple values

arr.unshift(100);
console.log(arr); // [ 100, 10, 20, 30, 40, 50, 60, 70 ]

arr.unshift(300, 200);
console.log(arr); // [ 300, 200, 100, 10, 20, 30, 40, 50, 60, 70 ]

// 4. shift(): shift() method is used to remove values one by one from the begining of the array

arr.shift();
console.log(arr); // [ 200, 100, 10, 20, 30, 40, 50, 60, 70 ]

// 5. slice(start index, end index): slice() method is used to fetch set of values based upon both positive and negative index values, excluding the end index

console.log(arr.slice(0, 5)); // [ 200, 100, 10, 20, 30 ]
console.log(arr.slice(-9, - 5)); // [ 200, 100, 10, 20 ]


// 6. splice(start index, count, new elements) : splice() method is used to fetch the elements and it will affect the original array, it will add or remove the elements

let arr1 = [10, 20, 30, 40, 50];
console.log(arr1); // [ 10, 20, 30, 40, 50 ]
console.log(arr1.splice(0, 2)); // [10, 20] & Starting from 0 index 2 elements will be remove from original array
console.log(arr1); // [ 30, 40, 50 ]

let arr2 = [10, 20, 30, 40, 50];
console.log(arr2); // [ 10, 20, 30, 40, 50 ]
console.log(arr2.splice(0,2,"Hi","Hello")); // [ 10, 20 ] & Starting from 0 index 2 elements will be remove from original array & add "Hi" and "Hello"
console.log(arr2); // [ 'Hi', 'Hello', 30, 40, 50 ]


// 7. reverse(): reverse() method will reverse the elements of the array

let arr3 = [20,40,60,80,100];
console.log(arr3); // [ 20,40,60,80,100 ]
console.log(arr3.reverse()); // [ 100, 80, 60, 40, 20 ]


// 8. sort(): sort() method will sort the elements of the array by considering the elements as string value

let arr4 = ["apple", "mango" , "orange" , "banana", "grapes"];
console.log(arr4.sort()); // [ 'apple', 'banana', 'grapes', 'mango', 'orange' ]

let arr5 = [10,50,30,40,20];
console.log(arr5.sort((a,b) => { return a-b })); // [ 10, 20, 30, 40, 50 ]
console.log(arr5.sort((a,b) => { return b-a })); // [ 50, 40, 30, 20, 10 ]


/* 9. forEach() : forEach() is a inbuilt higher order function which takes another callback funcyion as parameter and it  will iterate over each elements of the array

   Note: the callback function of forEach() will take three parameter as element, index, array
*/
let arr6 = [100,200,300,400];
arr6.forEach((element, index, array) => {console.log(element + " Rupees Given")});


/* Output: 
    100 Rupees Given
    200 Rupees Given
    300 Rupees Given
    400 Rupees Given
*/

/* 10. map(): map() is a inbuilt higher order function which takes another callback function as parameter and it will iterate over 
   each element of the array, and the return value of that callback function for each element will be added to new array, and it will 
   return new array.

   Note: the callback function of map() will take 3 parameters as element, index and array
*/

let arr7 = [200,400,600,800];
let ans = arr7.map((element,index,array) => { return element + " " + index + " " + array });
console.log(ans); // ['200 0 200,400,600,800','400 1 200,400,600,800','600 2 200,400,600,800','800 3 200,400,600,800']


/* 11. filter(): filter() is a inbuilt higher order function which takes another callback function as parameter and it will iterate over
   each element of the array and the given callback function check for the condition for each element , if it returns true then that value
   will be added to new array or else it'll not be added, and it will return the new array 
   
   Note: the callback function of filter() will take 3 parameter as element, index, array
*/

let arr8 = [1,2,3,4,5,6];
let even = arr8.filter((element,index,array) => { return element % 2 == 0});
console.log(even); // [ 2, 4, 6 ]


/* 12. reduce(): reduce() is a inbuilt higher order function which takes another callback function as parameter and it will iterate over
   each element of the array and it will return single value.

   Note: the callback function of reduce() will take four parameter as previous value, current value, index, array
*/

let sumofelement = arr8.reduce((previous,current,index,array) => { return previous+current});
console.log(sumofelement); // 21

// 13. join(): join() method will convert a given array into string based on specified separator
let str = arr8.join(" ");
console.log(str); // 1 2 3 4 5 6

/* 14. some(): some() method will iterate over each element of the array, and that element will be tested based upon given condition,
   if any one of the condition is true then it will return true
*/
console.log(arr8.some((element) => {return element > 5})); // true

/* 15. every(): every() method will iterate over each element of the array, and that element will be tested based upon given condition,
   if any one of the condition is false then it will return false
*/
console.log(arr8.every((element) => {return element > 5})); // false

// 16. includes(): includes() method will check a particular element is present in the array or not
console.log(arr8.includes(2)); // true
console.log(arr8.includes(10)); // false

// 17. indexOf(): indexOf() will fetch the first index value for a specific element
let arr9 = [1,2,3,4,1,5];
console.log(arr9.indexOf(1)); // 0

// 18. lastIndexOf(): lastIndex)f() will fetch the last index value for a specific element
console.log(arr9.lastIndexOf(1)); // 4

// 19. concat(): concat() will concat two arrays
let arr10 = [10,20];
console.log(arr9.concat(arr10)); // [1, 2,  3,  4,1, 5, 10, 20]
let a = 'Hi';
console.log(typeof a);

let b = "Hello";
console.log(typeof b);

let c = "Bye";
console.log(typeof c);

// ------------------------------------------------ Inbulit Methods Of String Datatpe ---------------------------------------------------------------------------

// 1. length
let d = "Abhishek";
console.log(d.length); // 8

// 2. toUpperCase()
let e = "kolkata";
console.log(e.toUpperCase()); // KOLKATA

// 3. toLowerCase()
let f = "KOLKATA";
console.log(f.toLowerCase()); // kolkata

// 4. charAt(index)
let g = "Bengalore";
console.log(g.charAt(4)); // a

// 5. charCodeAt(index)
let str1 = "java";
console.log(str1.charCodeAt(1)); // 97 (ASCII value of a is 97)

// 6. slice(starting index, ending index) : find the set of characters based on both positive and negative index values, ending index will be excluded.
let str2 = "JavaScript"; 
console.log(str2.slice(0, 4)); // Java
console.log(str2.slice(-10, -5)); // JavaS

// 7. substring(starting index, ending index) : find the substring based on positive index values, ending index will be excluded.
console.log(str2.substring(0, 6)); // JavaSc

// 8. substr(starting index, length)
console.log(str2.substr(0, 7)); // JavaScr


let str3 = "     Jspiders     ";
console.log("Before The Length Of The String: " + str3.length);

// 9. trimStart() : It will trim the leading whitespaces
str3 = str3.trimStart();
console.log("After Trimming The Leading Whitespaces The Length Will Be: " + str3.length);

// 10. trimEnd() : It will trim the trailing whitespaces
str3 = str3.trimEnd();
console.log("After Trimming The Trailing Whitespaces The Length Will Be: " + str3.length);

// 11. trim() : It will trim both the leading and trailing whitespaces
let str4 = "    Hello    ";
console.log("Before The Length Of The String: " + str4.length);
str4 = str4.trim();
console.log("After Trimming The Leading And Trailing Whitespaces The Length Will Be: " + str4.length);

// 12. concat() : It will concat two strings
let str5 = "Java";
let str6 = "Script";
console.log(str5.concat(str6)); // JavaScript
console.log(str5.concat(" ", str6)); // Java Script

// 13. replace()
let str7 = "Rajajinagar";
console.log(str7.replace('a', 'b')); // Rbjajinagar

// 14. replaceAll()
console.log(str7.replaceAll('a', 'b')); // Rbjbjinbgbr

// 15. includes()
console.log(str7.includes('R')); // true
console.log(str7.includes('z')); // false

// 16. indexOf()
console.log(str7.indexOf('a')); // 1

// 17. lastindexOf()
console.log(str7.lastIndexOf('a')); // 9

// 18. padStart(targetlength, substring)
let str8 = "5";
console.log(str8.padStart(3, '0')); // 005

// 19. padEnd(targetlength, substring)
console.log(str8.padEnd(3, '0')); // 500

// 20. startsWith()
let str9 = "Jspider";
console.log(str9.startsWith('J')); // true
console.log(str9.startsWith('R')); // false

// 21. endsWith()
console.log(str9.endsWith('r')); // true
console.log(str9.endsWith('k')); // false

// 22. search()
let str10 = "Hello";
console.log(str10.search('e')); // 1

// 23. split()
let str11 = "Bangalore";
console.log(str11.split("")); // ['B', 'a', 'n','g', 'a', 'l','o', 'r', 'e']

let str12 = "Jspider Rajajinagar";
console.log(str12.split(" ")); // ['Jspider', 'Rajajinagar']
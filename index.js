//Arithmetic
var num = 10;
var numTwo = 20;
var z = num + numTwo;
console.log(num + numTwo);//addition3   30
console.log(numTwo - num);//difference  10
console.log(num * numTwo);//multiply    200
console.log(numTwo / num);//division (quotient) 2
console.log(numTwo % num);//modulus (remainder) 0

// increment & decrement
num++;//increment num = num + 1
numTwo--;//decrement numTwo = numTwo - 1
console.log(num);   11
console.log(numTwo);  19


//pre & post inc & dec
var x = ++num;//pre
// num = num + 1;
// x = num;
console.log(x, num); // 11 11

var y = num++;//post
// y= num; 
// num = num + 1;
console.log(y, num);// 10 11

//Operator Precedence: priority of operator in execution
var result = 10 + (78 / 10) * 20 + 45 - 20;
// * /
//+ - 
//L -> R
console.log(result); //191

//Assignment 
var val = 20;//(=) assignment operator
val += 5;//val = val + 5;
val -= 6;//val = val - 6
val *= 5;//val = val * 5;
val /= 5;//val = val / 5
console.log(val); //19

//String Opearators
var str = 'hello';
var strTwo = 'world';
var strResult = str + ' ' + strTwo;
console.log(strResult);//hello world

console.log('20' + 20);//implicit coercion  2020
console.log(20 * 20 - 'world');//NaN
console.log(20 + str + 20);//20hello20
console.log(20 + 20 + 'world');//40world
console.log('world' + 20 + 20);//world2020
console.log('' + 10);//10


//check for operator precedence
//check operands (numeric or non-numeric)
//result

// numeric string
// '20'

//aplha string
//'abcd'

//alpha numeric string
//'20abcd'

//'' converted to 0 

//comparison operator
var a = 9;
var b = '9';

//return boolean value (true or false)
console.log(a == b);//equal  true
console.log(a === b);//value and datatype  false
console.log(a != 9);//check for value    false
console.log(b !== 9);//value and datatype true
console.log(a > 10); false
console.log(b < 10); true
console.log(a >= 8); true


//Logical Opeartor
// && , ||, !
console.log(a == b && a != 9 && a > 10 && a >= 8);//if all the condition are true, it will return true   false
console.log((a == b || a != 9) && a > 10 || a >= 9)//if any of the condition is true, result is true      true
console.log(!(a == b));// false

//task
//practice expression with operators
//operator precedence (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

//var x = ++num //num = 20, get the value of x
//var y = num++ //num = 10, get the value of y

var num = 20;
var x = ++num;//pre-increnent
// num = num + 1;21
// x = num;21
console.log(x, num);//21 21


var num = 10;
var y = num++;//post-increment
// y = num;//10
// num = num + 1;//11
console.log(y, num);//10 11

num--;

//(true == false) > 2

//(num ** num_val + (90 + 9) / 90) ;// num = 20 and num_val = 30

// console.log(2 ** 3);//2 * 2* 2

//post & practice questions

//Post & Pre Increment(++) & decrement(--)
// (pre)
//var num = 20;
//var x = ++num;
// console.log(x);21


// (post)
//var numOne = 10;
//var y = numOne++;
//console.log(y); 10
//console.log(numOne); 10



//practice
//refer (for example)
// var val = 23;
// var t = ++val;
// // val = val + 1;//24
// // t= val;//24
// val++; //25
// console.log(val);//25
// console.log(t);//24

//
//var numVal = 30;
//var u = --numVal;
//numVal++;
//console.log(u);29
//console.log(numVal);30

//
var a = 40;
var b = a++;
//b = a;//40
// a = a+ 1;//41
b++;//41
console.log(a);//41
console.log(b);//41

//
// var f = 50;
// var g = f++;
// g--;
// console.log(g);//49
// console.log(f);//51

//
//var val = 10;
//val++;
//var h = --val;
//h++;
//console.log(h);11
//console.log(val);10

//
//var num = 20;
// num++;21
num=num+1;22
// var t = ++num;23
// num++;24
// --num===23
// console.log(num, t);23 22

//
//var num = 10;
// --num;
num=num-1
// var y = ++num + 10;
y=10+10
// --y;
y=y-1//19
// console.log(y);19
// console.log(num);10

//
//var num = 30;
// ++num;
num=num+1;
// num++ - 10;
// console.log(num);21

// Implicit coercion:
//practice questions on implicit coersion
console.log('A' - 1);//NaN
console.log('A' + 1);//A1
console.log(2 + '2' + '2');//222
console.log('hello' + 'world' + 89);//helloworld89
console.log('hello' - 'world' + 89);//NaN
// console.log('hello' + 78);// hello78
// console.log('78' - 90 + '2');// -122
// console.log(2 - '2' + 90);// 90
// console.log(89 - '90' / 2);//44







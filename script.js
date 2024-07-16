// Arithmetic Oparators (+,-,*,/) , (a + b) this is an expressions the value in it are called operands //
// % is called modulus which print remainder//

// Artimetic Oparators 
let a = 5;
let b = 6;
console.log("a+b=",a+b);
console.log("a=",a,"&b=",b);
// if we use (a**b) then it means that (a^b) , and it's called exponentiation(**)
console.log("(**)means (^) which is called exponentiation , a**b = ",a**b);
// unary oparators ( it requared only one operands )
// increment oparators ( it requared only one operands ) , which is (++) it means (a+1)
// decrement oparator ( it requared only one operands ) , which is (--) it means (a-1)
a++;
console.log("a=",a);
// a++ is called post increment , and a-- is called pre increment 
// post change the value from next line in loop , pre change the value first ( in the start ) in loop 
// b++ is called post decrement , and --b is called pre decrement
console.log("++a = ", ++a);
console.log("a++ = ", a++);
console.log("a = ",a);
// assignment oparator , (=) , (+=) , (*=) , (%=) , (**=);
// a+=4 means a= a+4 ; it's a compact way
console.log("a+=4",a+=4);
// comparison oparator , equal to (==) , equal to and type (===) it also check data type, not equal to (!=) , not equal to and type (!==) ;
// and > , >= , < , <=
let c =4;
let d= 4 ;
console.log("c==d", c==d); //true
console.log("a==b" , a==b); //false
let e = 9;
let f = "9"; // it's a string because of ( " " )
console.log("e===f",e===f);//false
console.log("e!==f",e!==f);//true
// logical oparators are , logical and ( && ) every expression need to be true , logical or ( || ) only one expression need to be true , logical not ( ! ) if there is not then it will print convert the true to false , these oparators evaluate multiple expressions
console.log("e!==f && c===d" , e!==f && c===d);
console.log("e===f && c===d" , e===f && c===d); // it will print false because one of it's conditions is false which is (e===f)
console.log("!(e!==f)",!(e!==f));//true to false
// conditional statement , you can consider it as a expression , if , else are conditional statement;
let age = 25;
let age1 = 15;
if (age >=18) {
    console.log("you can vote");// you can also print it in one line because it only have one line 
}
if (age1 <18) {
   rule = "you can not vote";
}
console.log(rule);
// syntex -> rules

// ternary operators , it has 3 operands like , condition ? true output : false output , example : age > 18 ? "adult" : "not adult";
// here the ( : ) and the ( ? ) is the ternary operator , and condition , true output and , false output is the operands
let age2 = 15 ;
age2>18 ? "adult" : "not adult" ; // it will not print like that because we are not storing it in any variable and simple we are not printing anything
// so to print the value
let results = age2>18 ? "adult" : "not adult" ;
console.log(results);
age2>18 ? console.log("adult") : console.log("not adult") ; // unfortunately ternary is not preferable // it's only for sinple condition .
// MDN docs it's a documentation web site which will help us to understand code better
// prompt("hello!");//it take input value and it will also give you massage that will be given
// now let's print the input value
let fullName =promt("hello , input your name ,it will print it in the console bar");
console.log(fullName);
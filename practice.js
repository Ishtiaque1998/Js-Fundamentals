//Problem-1

var fruits= ['Apple', 'Banana', 'Orange'];
var position= fruits.indexOf('Banana');
// console.log(position);

fruits[1]='Mango';
// console.log(fruits);

fruits.pop();
// console.log(fruits);
fruits.push('Watermelon');
// console.log(fruits);

//Problem-2

var marks=4;

if (marks>=80){
 console.log('A');
}
else if(marks>=60){
 console.log('B');
}
else if(marks>=50){
 console.log('C');
}
else if(marks>=40){
 console.log('D');
}
else{
 console.log('F');
}

//Problem-3

var num1=13;
var num2=79;
var num3=45;

if(num1>num2 && num1>num3){
 console.log(num1);
}
else if(num1<num2 && num2>num3){
 console.log(num2);
}
else{
 console.log(num3)
}


//Problem-4

var side1=9;
var side2=8;
var side3=9;

if(side1==side2 || side1==side3 || side2==side3){
 console.log('Isoscles triangle');
}

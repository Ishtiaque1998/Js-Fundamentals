const arr= [1,2,3,4,5,6];

for (let index = 0; index < arr.length; index++) {
 

if (arr[index]>arr[index--]) {
  const element = arr[index];
 console.log(element); 
 
}

}